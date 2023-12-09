class PuzzleNine {
  constructor(input) {
    this.input = this.parseInput(input)
  }

  parseInput(input) {
    const lines = input.split('\n')
    return lines.map((line) => {
      const differenceAray = this.differenceReducer(line.split(' '))
      const differences = {history: differenceAray, next: this.getNextStep(differenceAray), previous: this.getPreviousStep(differenceAray)}
      return (differences)
    })
  }

  partOne() {
    return this.input.reduce((acc, curr) => acc + curr.next, 0)
  }
  
    partTwo() {
    return this.input.reduce((acc, curr) => acc + curr.previous, 0)
    }

  getNextStep(input) {
    let nextStep = 0;
    for (let i = input.length - 1; i >= 0; i--) {
      nextStep += parseInt(input[i][input[i].length - 1])
    }
    return nextStep
  }

  getPreviousStep(input) {
    let previousStep = 0;
    for (let i = input.length - 2; i >= 0; i--) {
      previousStep = parseInt(input[i][0] - previousStep)
    }
    return previousStep
  }

  getNextHistory(input) {
    const differences = []
    for (let i = 0; i < input.length - 1; i++) {
      differences.push(input[i + 1] - input[i])
    }
    return differences;
  }

  // calls getNextHistory until all the differences are 0
  differenceReducer(input) {
    const differenceMap = [input]
    let differences = [1]
    while (differences.some((diff) => diff !== 0)) {
      differences = this.getNextHistory(differenceMap[differenceMap.length - 1])
      differenceMap.push(differences)
    }
    return differenceMap
  }
}

module.exports = {PuzzleNine}
