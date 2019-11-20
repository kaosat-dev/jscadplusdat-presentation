const getParameterDefinitions () {
    return [
      {name: 'nameText', caption: 'Text:', type: 'text', default: 'JSCAD'},
      {name: 'textColor', caption: 'Text color:', type: 'color', default: rgbToHex([0, 0, 0])},
      {name: 'bodyColor', caption: 'Body color:', type: 'color', default: rgbToHex([0.89, 1, 0])},
      {name: 'textThickness', caption: 'Text thickness:', type: 'float', default: 2},
      {name: 'fontweight', caption: 'Fontweight:', type: 'float', default: 5},
      {name: 'fontwidth', caption: 'Fontwidth [%]:', type: 'float', default: 100},
      {name: 'thickness', caption: 'Thickness:', type: 'float', default: 2},
      {name: 'width', caption: 'Width:', type: 'float', default: 9},
      {name: 'cornerRadius', caption: 'Corner radius:', type: 'float', default: 4},
      {name: 'resolution', caption: 'Resolution', type: 'int', default: 24}
    ]
  }


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
