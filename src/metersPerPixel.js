module.exports = function metersPerPixel (map = null) {
  if (!map && global.map && global.map.getCenter && typeof global.map.getCenter === 'function') {
    const center = global.map.getCenter()
    map = {
      zoom: global.map.getZoom,
      center: { lat: center.lat, lon: center.lng }
    }
  } else {
    return 1
  }

  map.metersPerPixel = 40075016.686 * Math.abs(Math.cos(map.lat / 180 * Math.PI)) / Math.pow(2, map.zoom + 8)
  return map.metersPerPixel
}
