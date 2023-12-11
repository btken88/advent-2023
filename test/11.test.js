const {PuzzleEleven} = require('../days/11')
const {dayEleven} = require('./test-data')

const sampleInputOne = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`

test('Day 10 part one helpers', () => { 
  const puzzle = new PuzzleEleven(sampleInputOne)
})

test('Day 10 part one samples', () => {
  const puzzle = new PuzzleEleven(sampleInputOne)
  expect(puzzle.partOne()).toEqual(374)
})

test('Day 10 part one final', () => {
  const puzzle = new PuzzleEleven(dayEleven)
  expect(puzzle.partOne()).toBe(9974721)
})

test('Day 10 part two sample', () => {
  const puzzle = new PuzzleEleven(sampleInputOne)
  expect(puzzle.partTwo()).toEqual(82000210)
})

test('Day 10 part two final', () => {
  const puzzle = new PuzzleEleven(dayEleven)
  expect(puzzle.partTwo()).toBe(702770569197)
})
