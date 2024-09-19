import dayjs from 'dayjs'
import styled from 'styled-components'
import { listDates } from '../services/utils'
import { WeatherForecastUnit } from '../services/weatherApi'
import { StyledButton } from '../components/button'

interface ForecastedDaySelectProps {
  data: WeatherForecastUnit[] | undefined
  displaySelectedDate: (
    data: WeatherForecastUnit[],
    selectedDate: string
  ) => void
}

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: center;
  margin-bottom: 1rem;
`

const ForecastedDaySelect = ({
  data,
  displaySelectedDate,
}: ForecastedDaySelectProps) => {
  if (!data) {
    return <></>
  }
  const datesList = listDates(data)

  return (
    <ButtonContainer>
      {datesList.map((dateStr) => (
        <StyledButton $small onClick={() => displaySelectedDate(data, dateStr)}>
          {dayjs(dateStr).format('ddd MMM D')}
        </StyledButton>
      ))}
    </ButtonContainer>
  )
}

export default ForecastedDaySelect
