import styled from 'styled-components'

interface ButtonProps {
  $small?: boolean
}

export const StyledButton = styled.button<ButtonProps>`
  margin: 2rem;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s ease-in-out;
  min-width: 95px;

  background-color: #ddd;

  &:hover {
    background-color: #bbb;
  }

  ${({ $small }) =>
    $small &&
    `
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 14px;
  `}
`
