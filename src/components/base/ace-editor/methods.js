export default {
  editorInit () {
    // 加载地图所需的文件
    require([
      '../../../libs/ace/ace',
      '../../../libs/ace/theme-xcode',
      '../../../libs/ace/mode-json'
    ], (ace) => {
      let editor = ace.edit(this.$refs.editor)
      editor.setTheme('ace/theme/xcode')
      editor.session.setMode('ace/mode/json')
      editor.setReadOnly(true)
    })
  }
}
