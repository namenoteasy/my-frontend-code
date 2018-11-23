export let life = {
  mounted () {
    this.methods('setPropToLabelObj')
    this.$nextTick(function () {
      this.methods('autoExpand')
    })
    $(window).on('resize', () => {
      this.methods('autoExpand')
    })
  },
  updated () {
    this.methods('getPropToLabel')
  }
}
export let event = {
  handleAutoExpand () {
    setTimeout(() => {
      this.methods('autoExpand')
    }, 1)
  },
  clickTr (row, event, column) {
    this.methods('clickTr', row, event, column)
  }
}
export let watch = {
// 当不可折叠的时候，将那些折叠产生的tr去掉
  expand () {
    if (!this.expand) {
      $(this.$refs.tableWrapper).find('.el-table__expanded-cell').parent().remove()
    }
  },

  // hideLevel发生改变时
  hideLevel () {
    if (this.hideLevel.length > 0) {
      this.expand = true
    } else {
      this.expand = false
    }
  },

  // 当数据改变，需要重新计算最小宽度
  tableData () {
    if (_.isEmpty(this.tableData)) return
    this.methods('setPropToLabelObj')
    // this.methods('getPropToLabel')

    this.$nextTick(() => {
      // 判断是否要显示扩展
      this.methods('autoExpand')

      // 点击第一列
      // this.$nextTick(() => {
      //   if (this.highlightCurrentRow) { $(this.$refs.table.$el).find('tbody tr:eq(0)').trigger('click') }
      // })
    })
  }
}
