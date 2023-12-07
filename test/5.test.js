const {PuzzleFive} = require('../days/5');
const {dayFive} = require('./test-data');

const sampleData = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`
const expectedOne = 35

test('Day five part one sample', () => {
  const puzzle = new PuzzleFive(sampleData)
  expect(puzzle.partOne()).toEqual(expectedOne)
})

test('Day five part one final', () => {
  const puzzle = new PuzzleFive(dayFive)
  expect(puzzle.partOne()).toBe(650599855)
})

const expectedTwo = 46

test('Day five part two sample', () => {
  const puzzle = new PuzzleFive(sampleData)
  expect(puzzle.partTwo()).toEqual(expectedTwo)
})

test('Day five part two final', () => {
  const puzzle = new PuzzleFive(dayFive)
  expect(puzzle.partTwo()).toEqual(1240035)
})