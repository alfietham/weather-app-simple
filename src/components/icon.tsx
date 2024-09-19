import React from 'react'
import styled from 'styled-components'

interface IconProps {
  url: string
  alt?: string
}

const IconWrapper = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`

const UrlIcon = ({ url, alt = 'Icon' }: IconProps) => {
  return <IconWrapper src={url} alt={alt} />
}

export default UrlIcon
