import { useState } from 'react'
import { ApiResponse } from '../services/data'
import { fetchCurrentWeather, WeatherCurrent } from '../services/weatherApi'
import CityDropdown from '../components/dropdown'

export interface CityOptions {
  id: number
  name: string
  country: string
}

interface CurrentWeatherProps {
  setSelectedCity: (value: string) => void
  cityOptions: CityOptions[]
}

// @TODO: Put in separate file and unit test
const metersPerSecToKph = (speedMps: number) => Math.round(speedMps * 3.6)

const CurrentWeather = ({
  setSelectedCity,
  cityOptions,
}: CurrentWeatherProps) => {
  const [weatherData, setWeatherData] = useState<WeatherCurrent | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const loadCurrentWeather = async (cityId: string) => {
    setLoading(true)
    const response: ApiResponse<WeatherCurrent> = await fetchCurrentWeather(
      cityId
    )

    if (response.data) {
      setWeatherData(response.data)
      setError(null)
    } else if (response.error) {
      setError(response.error)
    }

    setLoading(false)
  }

  const handleDropdownSelect = (selectedValue: string) => {
    setSelectedCity(selectedValue)
    loadCurrentWeather(selectedValue)
  }

  return (
    <div>
      <div>Current Weather</div>
      <CityDropdown
        label="City"
        options={cityOptions}
        onSelect={handleDropdownSelect}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && !loading && !error && (
        <div>
          {weatherData.weather[0] && (
            <div>
              {/* The first weather condition in API respond is primary */}
              {/*  [Source](https://openweathermap.org/weather-conditions) */}
              <div>{weatherData.weather[0].main}</div>
              <div>{weatherData.weather[0].description}</div>
              <div>{weatherData.weather[0].icon}</div>
            </div>
          )}
          <div>{weatherData.main.temp} °C</div>
          <div>
            Wind speed: {metersPerSecToKph(weatherData.wind.speed)} km/h
          </div>
        </div>
      )}
    </div>
  )
}

export default CurrentWeather
