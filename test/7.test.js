const {PuzzleSeven} = require('../days/7')
const {daySeven} = require('./test-data')

const sampleInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

// const expectedOne = 6440

// test('Day seven part one sample', () => {
//   const puzzle = new PuzzleSeven(sampleInput)
//   expect(puzzle.scoreHand(['K', 'K', '6', '6', '7'])).toEqual(3)
//   expect(puzzle.breakTie(["T", "5", "5", "J", "5"], ["Q", "Q", "Q", "J", "A"])).toEqual(-2)
//   expect(puzzle.partOne()).toEqual(expectedOne)
// })

// test('Day seven part one final', () => {
//   const puzzle = new PuzzleSeven(daySeven)
//   expect(puzzle.partOne()).toBe(254024898)
// })

const sampleTwo = `2345A 1
Q2KJJ 13
Q2Q2Q 19
T3T3J 17
T3Q33 11
2345J 3
J345A 2
32T3K 5
T55J5 29
KK677 7
KTJJT 34
QQQJA 31
JJJJJ 37
JAAAA 43
AAAAJ 59
AAAAA 61
2AAAA 23
2JJJJ 53
JJJJ2 41`
const expectedTwo = 5905
const expectedSampleTwo = 6839

test('Day seven part two sample', () => {
  const puzzle = new PuzzleSeven(sampleInput)
  expect(puzzle.partTwo(sampleInput)).toEqual(expectedTwo)
})
test('Day seven part two sample two', () => {
  const puzzle = new PuzzleSeven(sampleTwo)
  expect(puzzle.partTwo(sampleInput)).toEqual(expectedSampleTwo)
})

test('Day seven part two final', () => {
  const puzzle = new PuzzleSeven(daySeven)
  expect(puzzle.partTwo(daySeven)).toEqual(254115617)
})