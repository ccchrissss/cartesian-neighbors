function cartesianNeighbor(x, y){

  return [[x-1, y-1], [x-1, y], [x-1, y+1], [x,y-1], [x, y+1], [x+1, y-1], [x+1,y], [x+1, y+1]]
  
}

console.log(cartesianNeighbor(3,3))


// parameters: x, y    // numbers (coordinates on a grid)
// return: array     // array of coordinates that mark all the neighboring points
// e.g. cartesianNeighbor(3,3)
// results in [(2,2), (2,3), (2,4), (3,2), (3,4), (4,2), (4,3), (4,4)]


// declare a variable bottomLeftCoord and assign it to (x-1, y-1)
// return [(x-1, y-1), (x-1, y), (x-1, y+1), (x,y-1), (x, y+1), (x+1, y-1), (x+1,y), (x+1, y+1)]