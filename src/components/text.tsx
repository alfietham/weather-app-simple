import styled from 'styled-components'

interface TextProps {
  h1?: boolean
  h2?: boolean
  p1?: boolean
  color?: string
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
  ${({ h2 }) =>
    h2 &&
    `
    font-size: 24px;
    font-weight: bold;
    `}
    ${({ p1 }) =>
    p1 &&
    `
    font-size: 20px;
  `}
    ${({ color }) => color && `color: ${color}`};
`
