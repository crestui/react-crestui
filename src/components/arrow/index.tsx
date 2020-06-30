import React from 'react'
import styled from 'styled-components'

const ArrowToLeft = styled.div`
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
`

const ArrowToRight = styled.div`
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
`

const ArrowToTop = styled.div`
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
`
const ArrowToBottom = styled.div`
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
  pointsTo: string
}

export const Arrow = (props: ArrowProps) => {
  switch (props.pointsTo) {
    case 'left':
      return <ArrowToLeft />
    case 'top':
      return <ArrowToTop />
    case 'right':
      return <ArrowToRight />
    case 'bottom':
      return <ArrowToBottom />
    default:
      throw new Error(`Invalid value for arrow pointsTo ${props.pointsTo}`)
  }
}
