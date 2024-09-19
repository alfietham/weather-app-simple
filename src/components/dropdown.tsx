import { useState } from 'react'
import styled from 'styled-components'
import { CityOptions } from '../weather/current'
import { Text } from './text'

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #ddd;
  color: #333;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #302aec;
  }

  &:hover {
    border-color: #aaa;
  }
`

const StyledOption = styled.option`
  text-align: center;
`

interface DropdownProps<T> {
  options: Array<T>
  onSelect: (value: string) => void
}

const CityDropdown = ({ options, onSelect }: DropdownProps<CityOptions>) => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedOption(selectedValue)
    onSelect(selectedValue)
  }

  return (
    <DropdownContainer>
      <StyledSelect value={selectedOption} onChange={handleSelect}>
        <StyledOption value="" disabled>
          <Text>-- Select a City --</Text>
        </StyledOption>
        {options.map((option, index) => (
          <StyledOption key={index} value={option.id}>
            <Text>
              {option.name} {option.country}
            </Text>
          </StyledOption>
        ))}
      </StyledSelect>
    </DropdownContainer>
  )
}

export default CityDropdown
