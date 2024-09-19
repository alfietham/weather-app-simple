import { useState } from 'react'
import styled from 'styled-components'

import { ApiResponse } from '../services/data'
import { fetchCurrentWeather, WeatherCurrent } from '../services/weatherApi'
import CityDropdown from '../components/dropdown'
import { Text } from '../components/text'
import { metersPerSecToKph } from '../services/utils'
import WeatherDetailsSection from './weatherDetails'

export interface CityOptions {
  id: number
  name: string
  country: string
}

interface CurrentWeatherProps {
  setSelectedCity: (value: string) => void
  cityOptions: CityOptions[]
}

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c2d2e1;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.32);
`

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

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
    <WeatherContainer>
      <Text $h2>Current Weather</Text>
      <CityDropdown options={cityOptions} onSelect={handleDropdownSelect} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && !loading && !error && (
        <WeatherInfo>
          <WeatherDetailsSection weather={weatherData.weather} />
          <Text $h2>{weatherData.main.temp} °C</Text>
          <Text>{metersPerSecToKph(weatherData.wind.speed)} km/h winds</Text>
        </WeatherInfo>
      )}
    </WeatherContainer>
  )
}

export default CurrentWeather
