import React, { useState } from 'react'
import styled from 'styled-components'

import CurrentWeather from './weather/current'
import ForecastWeather from './weather/forecast'
import { Text } from './components/text'

const cityOptions = [
  {
    id: 6167865,
    name: 'Toronto',
    country: '🇨🇦',
  },
  {
    id: 6094817,
    name: 'Ottawa',
    country: '🇨🇦',
  },
  {
    id: 1850147,
    name: 'Tokyo',
    country: '🇯🇵',
  },
]

const MainApp = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const App = () => {
  const [selectedCity, setSelectedCity] = useState('')

  return (
    <MainApp>
      <Text $h1>Weather Forecast</Text>
      <CurrentWeather
        setSelectedCity={setSelectedCity}
        cityOptions={cityOptions}
      />
      <ForecastWeather selectedCity={selectedCity} />
    </MainApp>
  )
}

export default App
