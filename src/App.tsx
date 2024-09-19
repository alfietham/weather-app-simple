import React, { useState } from 'react'
import './App.css'
import CurrentWeather from './weather/current'

const cityOptions = [
  {
    id: 6167865,
    name: 'Toronto',
    country: 'CA',
  },
  {
    id: 6094817,
    name: 'Ottawa',
    country: 'CA',
  },
  {
    id: 1850147,
    name: 'Tokyo',
    country: 'JP',
  },
]

const App = () => {
  const [selectedCity, setSelectedCity] = useState('')

  return (
    <div className="App">
      <header>Weather Forecast</header>
      <CurrentWeather
        setSelectedCity={setSelectedCity}
        cityOptions={cityOptions}
      />
    </div>
  )
}

export default App
