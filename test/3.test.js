const {dayThree} = require('./test-data')
const {PuzzleThree} = require('../days/3')

const sampleDataOne = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`
const expectedOne = 4361

const sampleTwo = `12.......*..
+.........34
.......-12..
..78........
..*....60...
78..........
.......23...
....90*12...
............
2.2......12.
.*.........*
1.1.......56`

const sampleThree = `12.......*..
+.........34
.......-12..
..78........
..*....60...
78.........9
.5.....23..$
8...90*12...
............
2.2......12.
.*.........*
1.1..503+.56`

test('Day three part one sample', () => {
  const puzzle = new PuzzleThree(sampleDataOne)
  expect(puzzle.partOne()).toEqual(expectedOne)
})

test('Day three part one sample 2', () => {
  const puzzle = new PuzzleThree(sampleTwo)
  expect(puzzle.partOne()).toEqual(413)
})

test('Day three part one sample 3', () => {
  const puzzle = new PuzzleThree(sampleThree)
  expect(puzzle.partOne()).toEqual(925)
})

test('Day three part one final', () => {
  const puzzle = new PuzzleThree(dayThree)
  expect(puzzle.partOne()).toBe(525911)
})

// const sampleDataTwo = ``
const expectedTwo = 467835

test('Day three part two sample', () => {
  const puzzle = new PuzzleThree(sampleDataOne)
  expect(puzzle.partTwo()).toEqual(expectedTwo)
})

test('Day three part two final', () => {
  const puzzle = new PuzzleThree(dayThree)
  expect(puzzle.partTwo()).toEqual(75805607)
})