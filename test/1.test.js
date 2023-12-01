const {dayOne} = require('./test-data')
const {PuzzleOne} = require('../days/1')

const testData = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
const expected = 142

test('Day one part one sample', () => {
  const puzzle = new PuzzleOne(testData)
  expect(puzzle.partOne(testData)).toEqual(expected)
})

test('Day one part one final', () => {
  const puzzle = new PuzzleOne(dayOne)
  expect(puzzle.partOne(testData)).toBe(55834)
})

const testData2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
eightwo`
const expected2 = 363

test('Day one part two sample', () => {
  const puzzle = new PuzzleOne(testData2)
  expect(puzzle.partTwo()).toEqual(expected2)
})

test('Day one part two final', () => {
  const puzzle = new PuzzleOne(dayOne)
  expect(puzzle.partTwo()).toEqual(53221)
})