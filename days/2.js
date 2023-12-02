class PuzzleTwo {
  constructor(input, colors) {
    this.games = this.prepInput(input)
    this.red = colors.red
    this.green = colors.green
    this.blue = colors.blue
  }

  partOne() {
    let validSum = 0
    this.games.forEach(game => {
      let validGame = true
      game.rounds.forEach(round => {
        if (!this.validRound(round)) validGame = false
      })
      if (validGame) validSum += game.id
    })
    return validSum
  }

  partTwo() {
    let powersSum = 0;
    this.games.forEach(game => {
      const minCubes = {
        red: 0,
        green: 0,
        blue: 0
      }
      game.rounds.forEach(round => {
        if (round.red > minCubes.red) minCubes.red = round.red
        if (round.green > minCubes.green) minCubes.green = round.green
        if (round.blue > minCubes.blue) minCubes.blue = round.blue
      })
      powersSum += minCubes.red * minCubes.green * minCubes.blue
    })
    return powersSum;
  }

  prepInput(input){
    const games = input.split("\n")
    return games.map(game => {
      // convert string to ["#", " roundsData"]
      const gameData = game.replace("Game ", "").split(":")
      //convert rounds to ["color #, color #", "color #, color #, color #"]
      const rounds = gameData[1].split(";").map(i => i.trim())
      const parsed = {
          id: parseInt(gameData[0]),
          rounds: []
        }
      rounds.forEach(round => {
        // convert round to ["color #", "color #"]
        const roundData = round.split(",").map(i => i.trim())
        // create {color: #, color: #} from rounds data
        const colors = roundData.reduce((cubeObject, cubeInfo) => {
          const result = cubeInfo.split(" ")
          cubeObject[result[1]] = parseInt(result[0])
          return cubeObject
        }, {})
        parsed.rounds.push(colors)
      })
      return parsed
    })
  }

  validRound(gameTotals) {
    let valid = true
    if (gameTotals.red > this.red) valid = false
    if (gameTotals.blue > this.blue) valid = false
    if (gameTotals.green > this.green) valid = false
    return valid
  }
}

module.exports = {PuzzleTwo}