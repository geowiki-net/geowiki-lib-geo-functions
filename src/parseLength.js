const metersPerPixel = require('./metersPerPixel.js')

module.exports = function parseLength (value, map) {
  const m = ('' + value).trim().match(/^([+-]?[0-9]+(?:\.[0-9]+)?)\s*(px|m|%)$/)

  if (m) {
    switch (m[2]) {
      case '%':
        return value
      case 'm':
        if (!map.metersPerPixel) {
          map.metersPerPixel = metersPerPixel(map)
        }

        return parseFloat(m[1]) / map.metersPerPixel
      case 'px':
      default:
        return parseFloat(m[1])
    }
  }

  return parseFloat(value)
}
