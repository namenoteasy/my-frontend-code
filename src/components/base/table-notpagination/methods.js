export default {
  clickTr (row, event, column) {
    this.$emit('row-click', ...arguments)
  },
  // 获取字段名
  setPropToLabelObj () {
    this.propToLabelObj = {}
    this.columns.forEach(item => {
      this.propToLabelObj[item.prop] = item
    })
  },
  // 计算每一列的宽度，并绑定到propToLabel上
  getPropToLabel () {
    let propToLabel = this.columns
    let minWidth = []

    // 还有一些直接写在slot的minWidth中
    let slotWidth = 0
    if (this.$slots) {
      for (let key in this.$slots) {
        this.$slots[key].forEach(item => {
          if (item.componentOptions && item.componentOptions.propsData && item.componentOptions.propsData.minWidth) {
            slotWidth += +item.componentOptions.propsData.minWidth
          }
        })
      }
    }

    let len = propToLabel.length
    propToLabel.forEach((item, index) => {
      item.minWidth = this.methods('minWidth', item.prop)
      minWidth[0] = minWidth[0] || 0
      minWidth[0] += item.minWidth
      // 自动的隐藏等级
      minWidth[len - index] = minWidth[len - index] || 0
      minWidth[len - index] += item.minWidth
      /* if (item.hideLevel) {
        minWidth[item.hideLevel] = minWidth[item.hideLevel] || 0
        minWidth[item.hideLevel] += item.minWidth
      } */
    })
    let newMinWidth = []
    minWidth.map((item, index) => {
      if (index > 0) {
        newMinWidth[index] = newMinWidth[index - 1] - item
      } else {
        newMinWidth[index] = item + slotWidth
      }
    })
    this.minWidthNum = newMinWidth
    this.newPropToLabel = propToLabel
    return propToLabel
  },
  /**
   * 自适应函数
   */
  autoExpand () {
    let tableWidth
    try {
      // 这里有个毛病，当这个表格不可见的时候，获取到的宽度是错的
      // 那么这里判断不可见就直接return了，也并不能完全解决问题
      // 所以在点击tabs切换的时候（表格从不可见变为可见），重新触发一次
      if (!$(this.$refs.table.$el).is(':visible')) {
        return
      }
      tableWidth = $(this.$refs.table.$el).width()
    } catch (e) {
      console.log('暂时无法获取表格宽度')
    }
    if (!tableWidth) return
    this.hideLevel = []
    this.minWidthNum.forEach((item, index) => {
      if (tableWidth < item + 250) { // +50是后来微调的，为了彻底避免出现横向滚动条
        if (index === this.minWidthNum.length - 1) { // 如果已经到达最大等级，那么允许出现横向滚动条
          $(this.$refs.tableWrapper).find('.el-table__body-wrapper').css('overflow-x', 'auto')
        }
        // console.log(this.hideLevel)
        this.hideLevel.push(index + 1)
      }
    })
  },
  /**
   * 计算某一列的最小宽度
   * @param prop 列名
   */
  minWidth (prop) {
    if (!this.propToLabelObj[prop]) {
      return 0
    }

    let minWidth = 0
    let propWidth = this.methods('strWidth', this.propToLabelObj[prop].label, 1)

    // 当然得考虑formatter的情况
    let formatter = this.propToLabelObj[prop].formatter
    this.tableData && this.tableData.forEach(item => {
      let str = item[prop] || ''
      if (formatter) {
        str = formatter(item) || ''
      }
      let contentWidth = this.methods('strWidth', str.toString())
      let width = contentWidth > propWidth ? contentWidth : propWidth
      if (width > minWidth) {
        minWidth = width
      }
    })

    // 如果有额外的加成那么
    if (this.propToLabelObj[prop].add) {
      minWidth += this.propToLabelObj[prop].add
    }
    if (minWidth > 400) {
      minWidth = 400
    } else if (minWidth < 70) {
      minWidth = 70
    }

    return minWidth
  },
  /**
   * 计算字符串的宽度
   * @param str 字符串
   * @param plus 在14号字体的基础上加多少
   * @returns {number} 宽度
   */
  strWidth (str, plus = 0) {
    if (!str) return 0
    let all = str.length
    if (!str.match) {
      console.log(str, '无法匹配字符串')
      return 0
    }
    let chinese = (str.match(/[\u4E00-\u9FA5\uF900-\uFA2D|WM（）]/g) || '').length
    // return chinese * (15 + plus) + (all - chinese) * (8 + plus)// 10是.cell的padding值的两倍
    return chinese * (15 + plus) + (all - chinese) * (8 + plus) + 10// 10是.cell的padding值的两倍
  }
}
