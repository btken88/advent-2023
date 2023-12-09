const {PuzzleEight} = require('../days/8')
const {dayEight} = require('./test-data')

const sampleInput = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`

const expectedOne = 2

test('Day 8 part one sample', () => {
  const puzzle = new PuzzleEight(sampleInput)
  expect(puzzle.partOne()).toEqual(expectedOne)
})

test('Day 8 part one final', () => {
  const puzzle = new PuzzleEight(dayEight)
  expect(puzzle.partOne()).toBe(21883)
})

test('Day 8 part two sample', () => {
  const puzzle = new PuzzleEight(`LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`)
  expect(puzzle.aLocations).toEqual(['11A', '22A'])
  expect(puzzle.partTwo()).toEqual(6)
})

test('Day 8 part two final', () => {
  const puzzle = new PuzzleEight(dayEight)
  expect(puzzle.aLocations).toEqual(["AAA", "NJA", "BHA", "HTA", "LJA", "XXA"])
  expect(puzzle.partTwo()).toBe(12833235391111)
})
