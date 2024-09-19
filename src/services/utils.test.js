import { filterByDate, listDates, metersPerSecToKph } from './utils'

describe('metersPerSecToKph', () => {
  test('should properly convert m/s to kph and rounded to nearest integer', () => {
    const actual = metersPerSecToKph(2.3)
    const expected = 8
    expect(actual).toEqual(expected)
  })

  test('should gracefully handle invalid values', () => {
    const actual = metersPerSecToKph(undefined)
    const expected = 'N/A'
    expect(actual).toEqual(expected)
  })
})

describe('listDates', () => {
  const data = [
    { dt: 1726779600 },
    { dt: 1726866000 },
    { dt: 1726952400 },
    { dt: 1726963200 },
    { dt: 1727049600 },
    { dt: 1727136000 },
    { dt: 1727200800 },
  ]

  const actual = listDates(data)
  const expected = [
    '2024-09-19',
    '2024-09-20',
    '2024-09-21',
    '2024-09-22',
    '2024-09-23',
    '2024-09-24',
  ]
  expect(actual).toEqual(expected)
})

describe('filter by date', () => {
  const data = [
    { dt: 1726779600 },
    { dt: 1726844400 },
    { dt: 1726855200 },
    { dt: 1726866000 },
    { dt: 1726941600 },
  ]
  const selectedDate = '2024-09-20'

  const actual = filterByDate(data, selectedDate)
  const expected = [{ dt: 1726844400 }, { dt: 1726855200 }, { dt: 1726866000 }]

  expect(actual).toEqual(expected)
})
