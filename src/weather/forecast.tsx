import { useEffect, useState } from 'react'
import { ApiResponse } from '../services/data'
import { fetchForecastWeather, WeatherForecast } from '../services/weatherApi'

interface ForecastWeatherProps {
  selectedCity: string
}

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
    <div>
      {selectedCity && (
        <button onClick={() => setShowForecast(!showForecast)}>
          {showForecast ? 'Close' : 'See Forecast'}
        </button>
      )}
      {showForecast && (
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <div>
              {forecastData?.list.map(({ dt, main, weather, wind }) => {
                const dateTime = new Date(dt * 1000)
                return (
                  <div key={dt}>
                    <div>{dateTime.toString()}</div>
                    <div>{main.temp}</div>
                    <div>{main.temp_max}</div>
                    <div>{main.temp_min}</div>
                    {weather[0] && <div>{weather[0].description}</div>}
                    <div>{wind.speed}</div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export default ForecastWeather
