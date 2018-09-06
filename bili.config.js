'use strict'

const glob = require('glob')

const isComponent = (path) => {
  const [ matches, directory, file ] = /.\/(.+)\/(.+).vue$/.exec(path) || []
  const isComponent = Boolean(matches && directory === file)
  return isComponent
}

const input = glob('./*/*.vue', { sync: true }).filter(isComponent)

module.exports = {
  input,
  banner: true,
  filename: '../[name]/index.js',
  formats: [ 'cjs' ],
  plugins: [ 'vue' ],
}
