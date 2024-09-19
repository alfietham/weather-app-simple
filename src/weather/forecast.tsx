import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

import { ApiResponse } from '../services/data'
import { fetchForecastWeather, WeatherForecast } from '../services/weatherApi'
import { StyledButton } from '../components/button'
import { Text } from '../components/text'
import { metersPerSecToKph } from '../services/utils'
import WeatherDetailsSection from './weatherDetails'

interface ForecastWeatherProps {
  selectedCity: string
}

const ForecastWrapper = styled.div`
  gap: 2rem;
`

const ForecastDataContainer = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  justify-content: center;
  gap: 1rem;

  @media (max-width: 830px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`

const ForecastUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c2d2e1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.32);
  gap: 0.25rem;
`

const ForecastWeather = ({ selectedCity }: ForecastWeatherProps) => {
  const [showForecast, setShowForecast] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [forecastData, setForecastData] = useState<WeatherForecast | null>(null)

  useEffect(() => {
    const loadForecastWeather = async () => {
      setLoading(true)
      const response: ApiResponse<WeatherForecast> = await fetchForecastWeather(
        selectedCity
      )

      if (response.data) {
        setForecastData(response.data)
        setError(null)
      } else if (response.error) {
        setError(response.error)
      }

      setLoading(false)
    }

    if (selectedCity) {
      loadForecastWeather()
    }
  }, [selectedCity])

  return (
    <ForecastWrapper>
      {selectedCity && (
        <StyledButton onClick={() => setShowForecast(!showForecast)}>
          {showForecast ? 'Close' : 'See Forecast'}
        </StyledButton>
      )}
      {showForecast && (
        <div>
          {loading && <Text color="#fff">Loading...</Text>}
          {error && <Text color="#fff">Error: {error}</Text>}
          {!loading && !error && (
            <ForecastDataContainer>
              {forecastData?.list.map(({ dt, main, weather, wind }) => {
                const dateTime = dayjs(dt * 1000)
                return (
                  <ForecastUnit key={dt}>
                    <div>
                      <Text>{dateTime.format('ddd MMM D')}</Text>
                      <Text $p1>{dateTime.format('hA')}</Text>
                    </div>
                    <WeatherDetailsSection weather={weather} />
                    <div>
                      <Text $h2>{Math.round(main.temp)} °C</Text>
                      <Text>High: {Math.round(main.temp_max)} °C</Text>
                      <Text>Low: {Math.round(main.temp_min)} °C</Text>
                    </div>
                    <Text>{metersPerSecToKph(wind.speed)} km/h winds</Text>
                  </ForecastUnit>
                )
              })}
            </ForecastDataContainer>
          )}
        </div>
      )}
    </ForecastWrapper>
  )
}
export default ForecastWeather
