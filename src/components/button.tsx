import styled from 'styled-components'

export const StyledButton = styled.button`
  margin: 2rem;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s ease-in-out;

  background-color: #ddd;

  &:hover {
    background-color: #bbb;
  }

  &:focus {
    outline: none;
  }
`
