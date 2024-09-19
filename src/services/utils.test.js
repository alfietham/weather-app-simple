import { metersPerSecToKph } from './utils'

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
