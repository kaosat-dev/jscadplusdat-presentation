const { circle, square } = require('@jscad/csg/api').primitives2d
const { cylinder, sphere, cube, torus } = require('@jscad/csg/api').primitives3d
const { color } = require('@jscad/csg/api').color
const { rotate, translate, scale, mirror, contract, expand } = require('@jscad/csg/api').transformations

function main () {
  return [
    // 2d
    translate([0, 10], circle()),
    translate([0, 5], square({ size: [10, 3] })),
    // 3d
    translate([0, -10], sphere()),
    translate([0, -5], cylinder()),
    cube(),
    scale(0.5, torus())
  ]
}

module.exports = { main }
