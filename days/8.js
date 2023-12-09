class PuzzleEight {
  constructor(input) {
    this.parseInput(input)
  }

  parseInput(input) {
    const [directions, locations] = input.split('\n\n')
    const locationMap = {}
    const aLocations = []
    locations.split('\n').forEach((line) => {
      const [location, leftRight] = line.split(' = ')
      if (location.endsWith('A')) aLocations.push(location)
      const left = leftRight.split(', ')[0].slice(1)
      const right = leftRight.split(', ')[1].slice(0, -1)
      locationMap[location] = {L: left, R: right}
    })
    this.directions = directions.split('')
    this.locationMap = locationMap
    this.aLocations = aLocations
  }

  partOne() {
    let location = 'AAA'
    let steps = 0
    do {
      this.directions.forEach((direction) => {
        steps++
        location = this.locationMap[location][direction]
      })
    } while (location !== 'ZZZ') 
    return steps
  }

  partTwo() {
    let locations = this.aLocations.map((loc) => {
      let steps = 0;
      let location = loc
      do {
      this.directions.forEach((direction) => {
        steps++
        location = this.locationMap[location][direction]
      })
    } while (!location.endsWith('Z')) 
      return steps
    })
    return this.lcm(locations)
  }

  // calculates the lowest common multiple of an array of numbers
  lcm(arr) {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    const _lcm = (x, y) => (x * y) / gcd(x, y);
    return [...arr].reduce((a, b) => _lcm(a, b));
  }
}


module.exports = {PuzzleEight}

// const {dayEight} = require('../test/test-data')
// const puzzle = new PuzzleEight(dayEight)
// console.log(puzzle.partTwo())