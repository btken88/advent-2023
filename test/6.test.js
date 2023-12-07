const {PuzzleSix} = require('../days/6')
const {daySix} = require('./test-data')

const sampleInput = `Time:      7  15   30
Distance:  9  40  200`

const expectedOne = 288

test('Day six part one sample', () => {
  const puzzle = new PuzzleSix(sampleInput)
  expect(puzzle.partOne()).toEqual(expectedOne)
})

test('Day six part one final', () => {
  const puzzle = new PuzzleSix(daySix)
  expect(puzzle.partOne()).toBe(2612736)
})

const expectedTwo = 0

test('Day six part two sample', () => {
  const puzzle = new PuzzleSix(sampleInput)
  expect(puzzle.partTwo(sampleInput)).toEqual(71503)
})

test('Day six part two final', () => {
  const puzzle = new PuzzleSix(daySix)
  expect(puzzle.partTwo(daySix)).toEqual(29891250)
})