class PuzzleFour {
  constructor(input) {
    this.input = this.parseInput(input)
  }

  partOne() {
    let totalPoints = 0
    this.input.forEach(card => {
        if (card.wins !== 0) {
          totalPoints += 2 ** (card.wins - 1)
        }
    })
    return totalPoints
  }


  partTwo() {
    const cards = [...this.input]
    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < cards[i].wins; j++) {
        cards.push(this.input[cards[i].id + j])
      }
    }
    return cards.length
  }

  parseInput(input) {
    const split = input.split('\n')
    const cardData = split.map(card => {
      const [cardNumber, cardData] = card.split(':').map(str => str.trim())
      const id = parseInt(cardNumber.replace('Card ', ''))
      const [winners, owned] = cardData.split('|').map(str => str.trim())
      const winnerNumbers = new Set(winners.split(' ').map(num => parseInt(num)).filter(num => !isNaN(num)))
      const ownedNumbers = owned.split(' ').map(num => parseInt(num)).filter(num => !isNaN(num))
      const wins = ownedNumbers.filter(num => winnerNumbers.has(num)).length || 0
      return {id, winnerNumbers, ownedNumbers, wins}
    })
    return cardData
  }
}

module.exports = { PuzzleFour }