class PuzzleFive{
  constructor(input){
    this.input = this.parseInput(input);
  }


  partOne(){
    const parsed = this.input.seeds.map(seed => {
      return this.getSeedData(seed)
    })
    let minLocation = Infinity;
    parsed.forEach(seed => {
      if (seed.location < minLocation)
        minLocation = seed.location
    })
      return minLocation
  }

  partTwoAlt(){
    const seedRanges = [];
    for (let i = 0; i < this.input.seeds.length; i += 2) {
      const start = this.input.seeds[i]
      const end = this.input.seeds[i+1] + start
      seedRanges.push({start, end})
    }
    const soilRanges = this.splitRanges(seedRanges, 'seed-to-soil');
    const fertilizerRanges = this.splitRanges(soilRanges, 'soil-to-fertilizer');
    const waterRanges = this.splitRanges(fertilizerRanges, 'fertilizer-to-water');
    const lightRanges = this.splitRanges(waterRanges, 'water-to-light');
    const temperatureRanges = this.splitRanges(lightRanges, 'light-to-temperature');
    const humidityRanges = this.splitRanges(temperatureRanges, 'temperature-to-humidity');
    const locationRanges = this.splitRanges(humidityRanges, 'humidity-to-location').sort((a, b) => a.start - b.start);
    return locationRanges[0].start
  }

  parseInput(input){
    const parsed = {}
    const mapGroups = input.split('\n\n')
    const seeds = mapGroups[0]
      .replace('seeds: ', '')
      .split(' ')
      .map(seed => parseInt(seed))
    mapGroups.slice(1).forEach(group => {
      const data = group.split('\n')
      const mapType = data[0].replace(' map:', '')
      parsed[mapType] = []
      data.slice(1).forEach(mapper => {
        const [destination, source, length] = mapper.split(' ').map(num => parseInt(num))
          parsed[mapType].push({destination, source, length, difference:  source - destination})
      })
      parsed[mapType].sort((a, b) => a.source - b.source)
    })
    parsed.seeds = seeds
    return parsed
  }

  splitRanges(ranges, type){
    const splitRanges = new RangeSplit()
    for (const range of ranges) {
      const {start, end} = range;
      let split = false;
      this.input[type].forEach(mapping => {
        const mappingStart = mapping.source
        const mappingEnd = mapping.source + mapping.length - 1
        if (
          mappingStart < start && mappingEnd < start
          || mappingStart > end
          || mappingEnd < start
          ) {
            return
          }
        else if (mappingStart <= start && mappingEnd >= end) {
          split = true;
          splitRanges.add({
            start: start - mapping.difference,
            end: end - mapping.difference
          })
          return
        } else if (mappingStart <= start && mappingEnd < end) {
          split = true
          splitRanges.add({
            start: start - mapping.difference,
            end: mappingEnd - mapping.difference
          })
          ranges.push({
            start: mappingEnd + 1,
            end
          })
          return
        } else if (mappingStart > start && mappingEnd >= end) {
          split = true
          splitRanges.add({
            start: mappingStart - mapping.difference,
            end: end - mapping.difference
          })
          ranges.push({
            start,
            end: mappingStart - 1
          })
          return
        } else if (mappingStart > start && mappingEnd < end) {
          split = true
          splitRanges.add({
            start: mappingStart - mapping.difference,
            end: mappingEnd - mapping.difference
          })
          ranges.push({
            start,
            end: mappingStart - 1
          })
          ranges.push({
            start: mappingEnd + 1,
            end
          })
          return
        }
      })
      if (!split) {
        splitRanges.add({start, end})
      }
    }
    return splitRanges.ranges.sort((a, b) => a.start - b.start)
  }

  getSeedData(seed) {
    const soil = this.getMappedValue(this.input['seed-to-soil'], seed)
    const fertilizer = this.getMappedValue(this.input['soil-to-fertilizer'], soil)
    const water = this.getMappedValue(this.input['fertilizer-to-water'], fertilizer)
    const light = this.getMappedValue(this.input['water-to-light'], water)
    const temperature = this.getMappedValue(this.input['light-to-temperature'], light)
    const humidity = this.getMappedValue(this.input['temperature-to-humidity'], temperature)
    const location = this.getMappedValue(this.input['humidity-to-location'], humidity)
    return {
      seed,
      soil,
      fertilizer,
      water,
      light,
      temperature,
      humidity,
      location
    }
  }

  getMappedValue(mapping, value){
    let result;
    mapping.forEach(mapping => {
      const mappedNumber = parseInt(mapping.source)
      if (value >= mappedNumber && value <= mappedNumber + (mapping.length-1)) {
        result = value - mapping.difference
      }
    })
    if (result) return result
    return value
  }
}

class RangeSplit{
  constructor() {
    this.endToStart = {}
    this.startToEnd = {}
  }

  get ranges() {
    return Object.keys(this.startToEnd).map(start => {
      return {
        start: parseInt(start),
        end: this.startToEnd[start]
      }
    })
  }

  add(range) {
    const endMatch = range.end + 1
    const startMatch = range.start - 1
    if (this.startToEnd[endMatch]) {
      this.startToEnd[range.start] = this.startToEnd[endMatch]
      this.endToStart[this.startToEnd[endMatch]] = range.start
      delete this.startToEnd[endMatch]
    }
    else if (this.endToStart[startMatch]) {
      this.endToStart[range.end] = this.endToStart[startMatch]
      this.startToEnd[this.endToStart[startMatch]] = range.end
      delete this.endToStart[startMatch]
    }
    else {
      this.startToEnd[range.start] = range.end
      this.endToStart[range.end] = range.start
    }
  }
}


module.exports = {PuzzleFive};