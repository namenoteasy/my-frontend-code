export let life = {
  created () {
    this.methods('handleCurrentChange')
  },
  mounted () {
    this.methods('setPropToLabelObj')
    this.$nextTick(function () {
      // 赋值到内存中
      this.tableWrapper = this.$refs.tableWrapper
      this.methods('autoExpand')
      // 设置高度
      this.methods('resizeTableHeight')
    })
    $(window).on('resize', () => {
      this.methods('resizeTableHeight')
      this.methods('autoExpand')
    })
  },
  updated () {
    this.methods('getPropToLabel')
  }
}
export let event = {
  handleCurrentChange () {
    this.methods('handleCurrentChange')
  },
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
      if (this.highlight) { $(this.$refs.table.$el).find('tbody tr:eq(0)').trigger('click') }
    })
  },
  activePage (newVal) {
    this.$emit('update:currentPage', newVal)
  },
  currentPage (newVal) {
    this.activePage = newVal
  }
}
