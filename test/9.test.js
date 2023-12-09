const {PuzzleNine} = require('../days/9')
const {dayNine} = require('./test-data')

const sampleInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`

const expectedOne = 114

test('Day 8 part one helpers', () => { 
  const puzzle = new PuzzleNine(sampleInput)
  expect(puzzle.getNextHistory([0, 3, 6, 9, 12, 15])).toEqual([3, 3, 3, 3, 3])
  expect(puzzle.getNextHistory([1, 3, 6, 10, 15, 21])).toEqual([2, 3, 4, 5, 6])
  expect(puzzle.getNextHistory([10, 13, 16, 21, 30, 45])).toEqual([3, 3, 5, 9, 15])
  expect(puzzle.differenceReducer([0, 3, 6, 9, 12, 15])).toEqual([[0, 3, 6, 9, 12, 15], [3, 3, 3, 3, 3], [0, 0, 0, 0]])
  expect(puzzle.getNextStep([[0, 3, 6, 9, 12, 15], [3, 3, 3, 3, 3], [0, 0, 0, 0]])).toEqual(18)
  expect(puzzle.getPreviousStep([[0, 3, 6, 9, 12, 15], [3, 3, 3, 3, 3], [0, 0, 0, 0]])).toEqual(-3)
})

test('Day 8 part one sample', () => {
  const puzzle = new PuzzleNine(sampleInput)
  expect(puzzle.partOne()).toEqual(expectedOne)
})

test('Day 8 part one final', () => {
  const puzzle = new PuzzleNine(dayNine)
  expect(puzzle.partOne()).toBe(1725987467)
})

test('Day 8 part two sample', () => {
  const puzzle = new PuzzleNine(sampleInput)
  expect(puzzle.partTwo()).toEqual(2)
})

test('Day 8 part two final', () => {
  const puzzle = new PuzzleNine(dayNine)
  expect(puzzle.partTwo()).toBe(971)
})
