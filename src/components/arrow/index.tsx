import React from 'react'
import styled from 'styled-components'

export const ArrowToBottom = styled.div`
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
`

export const ArrowToRight = styled.div`
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
`

export const ArrowToTop = styled.div`
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
`

export const ArrowToLeft = styled.div`
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
`

export interface ArrowProps {
  placement: string
}

export const Arrow = (props: ArrowProps) => {
  switch (props.placement) {
    case 'left':
      return <ArrowToRight />
    case 'top':
      return <ArrowToBottom />
    case 'right':
      return <ArrowToLeft />
    case 'bottom':
      return <ArrowToTop />
    default:
      throw new Error(`Invalid value for arrow pointsTo ${props.placement}`)
  }
}
