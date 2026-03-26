# geowiki-lib-geo-functions
Various geometry functions which are used by several modules.

## Common definitions
The `map` parameters expects the following values:
* map.zoom: current zoom level.
* map.center: the center of the current view as `{ lat: 0.0, lon: 0.0 }`.

Optional:
* map.metersPerPixel: the current size of a pixel

## FUNCTIONS
* parseLength(value, map) - parses a value (e.g. '4m') to view pixels at the current zoom level.
* metersPerPixel(map) - calculates the 'metersPerPixel' value
