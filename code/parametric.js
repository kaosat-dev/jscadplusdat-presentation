const { sphere, cube } = require('@jscad/csg/api').primitives3d
const { rotate, translate, scale } = require('@jscad/csg/api').transformations
const { difference } = require('@jscad/csg/api').booleanOps

const makePart = (holeRadius = 1) => {
  const block = difference(
    cube({ size: [10, 2, 1], center: true }),
    sphere({ r: holeRadius, center: true })
  )

  return block
}

const main = () => {
  return [
    makePart(3)
  ]
}

module.exports = { main }
