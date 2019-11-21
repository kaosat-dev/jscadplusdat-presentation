const { cylinder, sphere, cube, torus } = require('@jscad/csg/api').primitives3d
const { color } = require('@jscad/csg/api').color
const { hull, chain_hull } = require('@jscad/csg/api').transformations
const { linear_extrude } = require('@jscad/csg/api').extrusions
const { rotate, translate, scale, mirror, contract, expand } = require('@jscad/csg/api').transformations
const { union, difference, intersection } = require('@jscad/csg/api').booleanOps

const getParameterDefinitions = () => {
  return []
}

const main = () => {
  return cube()
}

module.exports = { main, getParameterDefinitions }
