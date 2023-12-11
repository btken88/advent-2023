class PuzzleEleven {
  constructor(input) {
    this.input = this.parseInput(input)
    this.inputTwo = this.parseInputTwo(input)
  }

  parseInput(input) {
    const lines = input.split('\n').map((line) => line.split(''))
    const galaxies = []
    const columnSet = new Set()
    const rowSet = new Set()
    for (const line of lines) {
      for (let i = 0; i < line.length; i++) {
        if (line[i] !== '.') {
          columnSet.add(i)
        }
      }
    }
    for (let i = 0; i < lines.length; i++) {
      if (!lines[i].every(item => item === '.')) rowSet.add(i)
    }
    for (let i = lines[0].length - 1; i > -1; i--) {
      if (!columnSet.has(i)) {
        lines.forEach((line) => line.splice(i, 0, '.'))
      }
    }
    for (let i = lines.length - 1; i >= 0; i--) {
      if (!rowSet.has(i)) lines.splice(i, 0, new Array(lines[0].length).fill('.'))
    }
    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] !== '.') {
          galaxies.push([i, j])
        }
      }
    }
    return {map: lines, galaxies}
  }

  parseInputTwo(input) {
    const lines = input.split('\n').map((line) => line.split(''))
    const galaxies = []
    const columnSet = new Set()
    const rowSet = new Set()
    for (const line of lines) {
      for (let i = 0; i < line.length; i++) {
        if (line[i] !== '.') {
          columnSet.add(i)
        }
      }
    }
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].every(item => item === '.')) rowSet.add(i)
    }
  for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] !== '.') {
          galaxies.push([i, j])
        }
      }
    }
    return {rows: rowSet, cols: columnSet, galaxies}
  }

  partOne() {
    let sum = 0
    for (let i = 0; i < this.input.galaxies.length - 1; i++) {
      const [x, y] = this.input.galaxies[i]
      for (let j = i + 1; j < this.input.galaxies.length; j++) { {
        const [x2, y2] = this.input.galaxies[j]
        const distance = Math.abs(x2 - x) + Math.abs(y2 - y)
        sum += distance
      }
    }
  }
  return sum
}
  
  partTwo() {
    let sum = 0;
    for (let i = 0; i < this.inputTwo.galaxies.length - 1; i++) {
      const [x, y] = this.inputTwo.galaxies[i]
      for (let j = i + 1; j < this.inputTwo.galaxies.length; j++) { {
        const [x2, y2] = this.inputTwo.galaxies[j]
        let distance = 0
        for (let i = x; i < x2; i++) {
          if (this.inputTwo.rows.has(i)) {
            distance += 1000000
          } else distance += 1
        }
        if (y > y2) {
          for (let i = y2; i < y; i++) {
            if (!this.inputTwo.cols.has(i)) {
              distance += 1000000
            } else distance += 1
          }
        } else {
          for (let i = y; i < y2; i++) {
            if (!this.inputTwo.cols.has(i)) {
              distance += 1000000
            } else distance += 1
          }
        }
        sum += distance
      }
    }
  }
  return sum
}
}

module.exports = {PuzzleEleven}