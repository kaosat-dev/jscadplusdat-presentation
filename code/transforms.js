const { cube } = require('@jscad/csg/api').primitives3d
const { color } = require('@jscad/csg/api').color
const { rotate, translate, scale} = require('@jscad/csg/api').transformations

function main () {
  return [
    // original
    color('red', cube()),

    // moved 10 units along Y axis
    translate([0, 10, 0],
      color('blue', cube())
    ),

    // scaled by 0.5 (halved)
    // moved -10 units along Y axis
    scale(0.5,
      translate([0, -10, 0],
        color('green', cube())
      )
    ),

    // rotated by 45 degrees
    // moved 10 units along X axis
    rotate([45, 0, 0],
      translate([10, 0, 0],
        color('orange', cube())
      )
    )
  ]
}

module.exports = { main }
