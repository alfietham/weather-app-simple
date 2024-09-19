import { useState } from 'react'
import { CityOptions } from '../weather/current'

interface DropdownProps<T> {
  label: string
  options: Array<T>
  onSelect: (value: string) => void
}

const CityDropdown = ({
  label,
  options,
  onSelect,
}: DropdownProps<CityOptions>) => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedOption(selectedValue)
    onSelect(selectedValue)
  }

  return (
    <div>
      <label>{label}</label>
      <select value={selectedOption} onChange={handleSelect}>
        <option value="" disabled>
          -- Select a City --
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}, {option.country}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CityDropdown
