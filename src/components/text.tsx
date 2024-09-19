import styled from 'styled-components'

interface TextProps {
  h1?: boolean
}

export const Text = styled.header<TextProps>`
  // Default Text
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #333;

  ${({ h1 }) =>
    h1 &&
    `
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #dedede;
    padding: 2rem;
    `}
`
