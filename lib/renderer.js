'use strict'
const sass = require('sass')
/**
 *
 * @param {*} data Hexo RendererData
 * @param {*} options
 * @returns string
 */
module.exports = function(data, options) {
  const self = this
  const config = Object.assign({}, self.theme.config.sass || {})
  const path = data.path
  const result = sass.compile(path, config)
  return result.css
}
