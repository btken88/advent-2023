const {dayTwo} = require('./test-data')
const {PuzzleTwo} = require('../days/2')

const sampleDataOne = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`
const expectedOne = 8

test('Day two part one sample', () => {
  const puzzle = new PuzzleTwo(sampleDataOne, {red: 12, green: 13, blue: 14})
  expect(puzzle.partOne()).toEqual(expectedOne)
})

test('Day two part one final', () => {
  const puzzle = new PuzzleTwo(dayTwo, {red: 12, green: 13, blue: 14})
  expect(puzzle.partOne()).toBe(2486)
})

const expectedTwo = 2286

test('Day two part two sample', () => {
  const puzzle = new PuzzleTwo(sampleDataOne, {red: 12, green: 13, blue: 14})
  expect(puzzle.partTwo()).toEqual(expectedTwo)
})

test('Day two part two final', () => {
  const puzzle = new PuzzleTwo(dayTwo, {red: 12, green: 13, blue: 14})
  expect(puzzle.partTwo()).toEqual(87984)
})