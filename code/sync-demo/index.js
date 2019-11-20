const { circle, square } = require('@jscad/csg/api').primitives2d
const { cylinder, sphere, cube, torus } = require('@jscad/csg/api').primitives3d
const { color } = require('@jscad/csg/api').color
const { hull, chain_hull } = require('@jscad/csg/api').transformations
const { linear_extrude } = require('@jscad/csg/api').extrusions
const { rotate, translate, scale, mirror, contract, expand } = require('@jscad/csg/api').transformations
const { union, difference, intersection } = require('@jscad/csg/api').booleanOps

const main = () => {
  const block = difference(
    cube({ size: [10, 2, 1], center: [true, true, false] }),
    cylinder()
  )

  return [block, rotate([0, 0, 45], block)]
}

module.exports = { main }
