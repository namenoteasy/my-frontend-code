export default {
  ShowViewer () {
    this.$nextTick(() => {
      require(['../../../libs/viewer/viewer.min.js'], (Viewer) => {
        // console.log(this.$refs.viewerImg)
        let viewer = new Viewer(this.$refs.viewerImg)
        console.log('viewer控件', viewer)
      })
    })
  }
}
