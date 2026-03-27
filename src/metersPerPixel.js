module.exports = function metersPerPixel (map = {}) {
  if (!map) {
    map = {}
  }

  if (!map.zoom && global.map && global.map.getZoom && typeof global.map.getZoom === 'function') {
    map.zoom = global.map.getZoom()
  } else {
    return 1
  }

  if (!map.center && global.map && global.map.getCenter && typeof global.map.getCenter === 'function') {
    const center = global.map.getCenter()
    map.center = { lat: center.lat, lon: center.lng }
  } else {
    return 1
  }

  map.metersPerPixel = 40075016.686 * Math.abs(Math.cos(map.center.lat / 180 * Math.PI)) / Math.pow(2, map.zoom + 8)
  return map.metersPerPixel
}
