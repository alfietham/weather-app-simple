import { apiFetch } from './data'

export interface WeatherCurrent {
  weather: {
    main: string
    description: string
    icon: string
  }[]
  main: {
    temp: number
  }
  wind: {
    speed: number
  }
  dt: number
}

export interface WeatherForecast {
  list: Array<{
    dt: number
    main: {
      temp: number
      temp_min: number
      temp_max: number
    }
    weather: Array<{
      main: string
      description: string
      icon: string
    }>
    wind: {
      speed: number
    }
  }>
}

const BASE_URL = 'http://api.openweathermap.org'
const APP_ID = process.env.REACT_APP_OPEN_WEATHER_APP_ID

const composeCurrentWeatherUrl = (cityId: string) =>
  `${BASE_URL}/data/2.5/weather?id=${cityId}&units=metric&appid=${APP_ID}`

export const fetchCurrentWeather = (cityId: string) => {
  const currentWeatherUrl = composeCurrentWeatherUrl(cityId)
  return apiFetch<WeatherCurrent>(currentWeatherUrl)
}

const composeForecastWeatherUrl = (cityId: string, numOfTimestamps = 5) =>
  `${BASE_URL}/data/2.5/forecast?id=${cityId}&units=metric&cnt=${numOfTimestamps}&appid=${APP_ID}`

export const fetchForecastWeather = (cityId: string) => {
  const forecastWeatherUrl = composeForecastWeatherUrl(cityId)
  return apiFetch<WeatherForecast>(forecastWeatherUrl)
}
