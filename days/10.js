const classifyPoint = require("robust-point-in-polygon");

class PuzzleTen {
  constructor(input) {
    this.loopMap = []
    this.rowMap = {}
    this.input = this.parseInput(input)
  }

  parseInput(input) {
    let lines = input.split('\n')
    let startLocation;
    lines = lines.map((line, rowIndex) => {
      let parsedLine = line.split('').map((char, index) => {
        if (char === '.') return null
        if (char === 'S') {
          startLocation = {row: rowIndex + 1, column: index + 1}
        }
        return char
      })
      parsedLine.push(null)
      parsedLine.unshift(null)
      return parsedLine
    })
    for (let i = 0; i < lines.length; i++) {
      this.rowMap[i + 1] = []
    }
    lines.push(new Array(lines[0].length).fill(null))
    lines.unshift(new Array(lines[0].length).fill(null))
    return {lines, startLocation}
  }

  startChild() {
    const {lines, startLocation} = this.input
    const {row, column} = startLocation
    if (lines[row - 1][column] === '|' ||
      lines[row - 1][column] === 'F' ||
      lines[row - 1][column] === '7') {
      return {
        row: row - 1,
        column: column,
        arrivalDirection: 'up',
        pipe: lines[row - 1][column]
      }
    }
    if (lines[row + 1][column] === '|' ||
      lines[row + 1][column] === 'J' ||
      lines[row + 1][column] === 'L') {
      return {
        row: row + 1,
        column: column,
        arrivalDirection: 'down',
        pipe: lines[row + 1][column]
      }
    }
    if (lines[row][column - 1] === '-' ||
      lines[row][column - 1] === 'F' ||
      lines[row][column - 1] === 'L') {
      return {
        row: row,
        column: column - 1,
        arrivalDirection: 'left',
        pipe: lines[row][column - 1]
      }
    }
    if (lines[row][column + 1] === '-' ||
      lines[row][column + 1] === 'J' ||
      lines[row][column + 1] === '7') {
      return {
        row: row,
        column: column + 1,
        arrivalDirection: 'right',
        pipe: lines[row][column + 1]
      }
    }
  }

  getChild(child) {
    const {lines, startLocation} = this.input
    const {row, column, arrivalDirection, pipe} = child
    if (pipe === 'S') return false
    switch (pipe) {
      case "|":
        if (arrivalDirection === 'up') {
          return {
            row: row - 1,
            column: column,
            arrivalDirection,
            pipe: lines[row - 1][column]
          }
        } else {
          return {
            row: row + 1,
            column: column,
            arrivalDirection: 'down',
            pipe: lines[row + 1][column]
          }
        }
      case "-":
        if (arrivalDirection === 'left') {
          return {
            row: row,
            column: column - 1,
            arrivalDirection,
            pipe: lines[row][column - 1]
          }
        } else {
          return {
            row: row,
            column: column + 1,
            arrivalDirection: 'right',
            pipe: lines[row][column + 1]
          }
        }
      case "J":
        if (arrivalDirection === 'down') {
          return {
            row,
            column: column - 1,
            arrivalDirection: 'left',
            pipe: lines[row][column - 1]
          }
        } else {
          return {
            row: row - 1,
            column,
            arrivalDirection: 'up',
            pipe: lines[row - 1][column]
          }
        }
      case "L":
        if (arrivalDirection === 'down') {
          return {
            row,
            column: column + 1,
            arrivalDirection: 'right',
            pipe: lines[row][column + 1]
          }
        } else {
          return {
            row: row - 1,
            column,
            arrivalDirection: 'up',
            pipe: lines[row - 1][column]
          }
        }
      case "F":
        if (arrivalDirection === 'up') {
          return {
            row,
            column: column + 1,
            arrivalDirection: 'right',
            pipe: lines[row][column + 1]
          }
        } else {
          return {
            row: row + 1,
            column,
            arrivalDirection: 'down',
            pipe: lines[row + 1][column]
          }
        }
      case "7":
        if (arrivalDirection === 'up') {
          return {
            row,
            column: column - 1,
            arrivalDirection: 'left',
            pipe: lines[row][column - 1]
          }
        } else {
          return {
            row: row + 1,
            column,
            arrivalDirection: 'down',
            pipe: lines[row + 1][column]
          }
        }
      }
  }

  partOne() {
    let child = this.startChild();
    while (child !== false) {
      this.loopMap.push(child)
      child = this.getChild(child)
    }
    return this.loopMap.length / 2
  }
  
  partTwo() {
    let child = this.startChild();
    let count = 0
    let loop = []
    while (child !== false) {
      loop.push([child.row, child.column])
      this.loopMap.push(child)
      child = this.getChild(child)
    }
    for (let i = 0; i < this.input.lines.length; i++) {
      for (let j = 0; j < this.input.lines[i].length; j++) {
        if (classifyPoint(loop, [i, j]) === -1) {
          count++
        }
      }
    }
    return count
  }
}

module.exports = {PuzzleTen}
