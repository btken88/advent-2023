class PuzzleThree {
  constructor(input){
    this.input = this.parseInput(input)
    this.parts = {}
  }

  partOne() {
    for (let row = 0; row < this.input.length; row++) {
      for (let i = 0; i < this.input[row].length; i++) {
        if (typeof this.input[row][i] === "string") {
          this.getNeighborParts(row, i)
        }
      }
    }
    return Object.keys(this.parts).reduce((sum, key) => sum + this.parts[key], 0)
  }

  partTwo() {
    let sum = 0
    for (let row = 0; row < this.input.length; row++) {
      for (let i = 0; i < this.input[row].length; i++) {
        if (this.input[row][i] === "*") {
          const neighbors = this.getNeighborParts(row, i)
          if (neighbors.size === 2) {
            const [first, second] = Array.from(neighbors)
            sum += this.parts[first] * this.parts[second]
          }
        }
      }
    }
    return sum
  }

  parseInput(input){
    const lines = input.split('\n')
    const parsed = lines.map(line => {
      const parsedLine = line.split('').map(char => {
        if (char === '.') return null
        if (char === '0') return 0
        if (parseInt(char)) return parseInt(char)
        return char
      })
      // Add padding null to avoid out of bounds errors
      parsedLine.unshift(null)
      parsedLine.push(null)
      return parsedLine
    })
    // Add padding null to avoid out of bounds errors
    parsed.unshift(Array(parsed[0].length).fill(null))
    parsed.push(Array(parsed[0].length).fill(null))
    return parsed
  }

  getNeighborParts(pointerRow, pointerColumn) {
    const neighbors = new Set();
    let location;
    if (this.input[pointerRow - 1]) {
      if (this.checkPosition(pointerRow - 1, pointerColumn)) {
        location = this.getNumber(pointerRow - 1, pointerColumn)
        neighbors.add(location)
      }
      if (this.checkPosition(pointerRow - 1, pointerColumn - 1)) {
        location = this.getNumber(pointerRow - 1, pointerColumn - 1)
        neighbors.add(location)
      }
      if (this.checkPosition(pointerRow - 1, pointerColumn + 1)) {
        location = this.getNumber(pointerRow - 1, pointerColumn + 1)
        neighbors.add(location)
      }
    }
    if (this.input[pointerRow + 1]) {
      if (this.checkPosition(pointerRow + 1, pointerColumn)) {
        location = this.getNumber(pointerRow + 1, pointerColumn)
        neighbors.add(location)
      }
      if (this.checkPosition(pointerRow + 1, pointerColumn - 1)) {
        location = this.getNumber(pointerRow + 1, pointerColumn - 1)
        neighbors.add(location)
      }
      if (this.checkPosition(pointerRow + 1, pointerColumn + 1)) {
        location = this.getNumber(pointerRow + 1, pointerColumn + 1)
        neighbors.add(location)
      }
    }
    if (this.checkPosition(pointerRow, pointerColumn - 1)) {
      location = this.getNumber(pointerRow, pointerColumn - 1)
      neighbors.add(location)
    }
    if (this.checkPosition(pointerRow, pointerColumn + 1)) {
      location = this.getNumber(pointerRow, pointerColumn + 1)
      neighbors.add(location)
    }
    return neighbors
  }

  checkPosition(row, column) {
    if (this.input[row][column] !== null
      && typeof this.input[row][column] === "number") {
        return true
      }
    return false
  }

  getNumber(row, column) {
    let start = column;
    let end = column;
    while (this.checkPosition(row, start - 1)) {
      start -= 1
    }
    while (this.checkPosition(row, end + 1)) {
      end += 1
    }
    const value = parseInt(this.input[row].slice(start, end + 1).join(''))
    const location = `${row}:${start}:${end}`
    this.parts[location] = value
    return location
  }
}

module.exports = {PuzzleThree}