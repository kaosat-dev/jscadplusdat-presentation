const block = difference(
    cube({ size: [10, 2, 1], center: [true, true, false] }),
    cylinder()
  )

  return [block, rotate([0, 0, 45], block)]

  { name: 'radius', caption: 'Radius:', type: 'float', default: 4 },
  { name: 'length', caption: 'Length:', type: 'float', default: 4 },
  { name: 'spokes', caption: 'Spokes:', type: 'int', default: 4 }