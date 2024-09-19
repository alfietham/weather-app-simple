import dayjs from 'dayjs'
import { WeatherForecastUnit } from './weatherApi'

export const metersPerSecToKph = (speedMps: number) =>
  speedMps !== undefined ? Math.round(speedMps * 3.6) : 'N/A'

export const listDates = (data: WeatherForecastUnit[]): string[] => {
  return data
    .map(({ dt }) => new Date(dt * 1000).toISOString().split('T')[0])
    .filter((date, index, self) => self.indexOf(date) === index)
}

export const filterByDate = (
  data: WeatherForecastUnit[],
  selectedDate: string
): WeatherForecastUnit[] => {
  const startOfSelectedDate = dayjs(selectedDate).startOf('day').unix()
  const endOfSelectedDate = dayjs(selectedDate).endOf('day').unix()
  return data.filter(
    ({ dt }) => dt > startOfSelectedDate && dt < endOfSelectedDate
  )
}
