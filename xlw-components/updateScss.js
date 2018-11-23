var fs = require('fs')
var statSync = fs.statSync
var path = require('path')
var scssFile = '../src/theme/xlw-components.scss'
var regex = /\.theme\.scss$/
var componentsScss = fs.readFileSync(scssFile,"utf-8")
var arg = process.argv.splice(2)
findScssFromComponents('./node_modules')
fs.writeFileSync(scssFile, componentsScss,"utf-8")
function findScssFromComponents (src) {
  var paths = fs.readdirSync(src)
  paths.forEach(function (path) {
    var currentSrc = src + '/' + path
    var st = statSync(currentSrc)
    if (st.isFile()) {
      if (!regex.test(path)) return
      var name = getName(path)
      if (arg.length && arg.indexOf(name) < 0) return
      var notesName = `/* xlw-components：${name} */\n`
      if (componentsScss.indexOf(notesName) > -1) return
      componentsScss = componentsScss + notesName + readFile(currentSrc).replace(/(\n)+$/, '\n').replace(/^(\n)+/, '\n')
    } else {
      findScssFromComponents(currentSrc)
    }
  })
}
function readFile (fileName) {
  var content = fs.readFileSync(fileName,"utf-8")
  return content.replace(/\s?\!default/g, '')
}
function getName (fileName) {
  return fileName.replace(regex, '')
}
