import styled from 'styled-components'
import UrlIcon from '../components/icon'
import { composeIconUrl, WeatherCurrent } from '../services/weatherApi'
import { Text } from '../components/text'

const WeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`

const WeatherDetailsSection = ({
  weather,
}: Pick<WeatherCurrent, 'weather'>) => {
  // The first weather condition in API respond is primary
  // [Source](https://openweathermap.org/weather-conditions)
  const weatherDetailPrimary = weather[0]

  return (
    weatherDetailPrimary && (
      <WeatherDetails>
        {weatherDetailPrimary.icon && (
          <UrlIcon url={composeIconUrl(weatherDetailPrimary.icon)} />
        )}
        <Text p1>{weatherDetailPrimary.main}</Text>
        <Text>{weatherDetailPrimary.description}</Text>
      </WeatherDetails>
    )
  )
}

export default WeatherDetailsSection
