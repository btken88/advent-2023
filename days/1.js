class PuzzleOne {
  constructor(input) {
    this.input = input
  }

  partOne() {
    let sum = 0
    const lines = this.input.split('\n')
    for (const line of lines) {
      const matcher = /[0-9]/g
      const matches = line.match(matcher)
      const value = `${matches[0]}${matches[matches.length - 1]}`
      sum += parseInt(value)
    }
    return sum
  }

  partTwo() {
    const lines = this.input.split('\n')
    return lines.reduce((sum, line) => {
      const matcher = /[0-9]|(?=(one))|(?=(two))|(?=(three))|(?=(four))|(?=(five))|(?=(six))|(?=(seven))|(?=(eight))|(?=(nine))/g
      const matches = line.matchAll(matcher)
      const matcharray = Array.from(matches)
      const firstMatch = matcharray[0]
      const lastMatch = matcharray[matcharray.length - 1]
      const firstNumber = this.getMatchValue(firstMatch)
      const lastNumber = this.getMatchValue(lastMatch)
      const value = `${this.numberMaker(firstNumber)}${this.numberMaker(lastNumber)}`
      return sum + parseInt(value)
    }, 0)
  }
  getMatchValue(matchItem){
    if(matchItem[0] != ''){
      return matchItem[0]
    } else {
      for (const item of matchItem) {
        if(item){
          return item
        }
      }
    }
  }
  numberMaker(input){
    switch(input){
      case 'one':
        return 1
        break;
      case 'two':
        return 2
        break;
      case 'three':
        return 3
        break;
      case 'four':
        return 4
        break;
      case 'five':
        return 5
        break;
      case 'six':
        return 6
        break;
      case 'seven':
        return 7
        break;
      case 'eight':
        return 8
        break;
      case 'nine':
        return 9
        break;
      default:
        return input
        break;
    }
  }
}

module.exports = {PuzzleOne};