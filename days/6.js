class PuzzleSix {
  constructor(input) {
    this.input = this.parseInput(input)
  }

  parseInput(input) {
    const [time, distance] = input.split('\n').map(line => {
      return line.split(':')[1].split(/\s+/).map(num => parseInt(num)).filter(num => !isNaN(num))
    })
    return {time, distance}
  }

  partOne() {
    const winCounts = []
    for (let i = 0; i < this.input.time.length; i++) {
      const time = this.input.time[i]
      const distanceRecord = this.input.distance[i]
      const winningTime = this.getBetterTime(distanceRecord, time)
      winCounts.push(winningTime)
    }
    return winCounts.reduce((sum, cur) => sum * cur)
  }

  partTwo(input) {
    const parsed = input.split('\n').map(line => line.replaceAll(' ', ''))
    return this.getBetterTime(parsed[1].split(':')[1], parsed[0].split(':')[1])
  }

  getBetterTime(distanceRecord, time) {
    let minTime = time % 2 == 1 
      ? Math.ceil(time/2)
      : (time/2)
    let minDistance = minTime * (time - minTime)
    while (minDistance > distanceRecord) {
      minTime = minTime - 1
      minDistance = minTime * (time - minTime)
    }
    const winRange = time % 2 == 1 
      ? ((Math.floor(time/2) - minTime) * 2)
      : (((time/2) - minTime) * 2) - 1
    return winRange
  }
}

module.exports = {PuzzleSix}