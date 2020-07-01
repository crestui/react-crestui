import React from 'react'
import styled from 'styled-components'

export const ArrowToBottom = styled.div<{ thickness: string }>`
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -${(props) => props.thickness};
  border-width: ${(props) => props.thickness};
  border-style: solid;
  ${(props) =>
    props.theme.colors.primary
      ? 'border-top-color : ' + props.theme.colors.primary + ';'
      : ''}
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
`

export const ArrowToRight = styled.div<{ thickness: string }>`
  content: '';
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -${(props) => props.thickness};
  border-width: ${(props) => props.thickness};
  border-style: solid;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  ${(props) =>
    props.theme.colors.primary
      ? 'border-left-color : ' + props.theme.colors.primary + ';'
      : ''}
`

export const ArrowToTop = styled.div<{ thickness: string }>`
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -${(props) => props.thickness};
  border-width: ${(props) => props.thickness};
  border-style: solid;
  border-top-color: transparent;
  border-right-color: transparent;
  ${(props) =>
    props.theme.colors.primary
      ? 'border-bottom-color : ' + props.theme.colors.primary + ';'
      : ''}
  border-left-color: transparent;
`

export const ArrowToLeft = styled.div<{ thickness: string }>`
  content: '';
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -${(props) => props.thickness};
  border-width: ${(props) => props.thickness};
  border-style: solid;
  border-top-color: transparent;
  ${(props) =>
    props.theme.colors.primary
      ? 'border-right-color : ' + props.theme.colors.primary + ';'
      : ''}
  border-bottom-color: transparent;
  border-left-color: transparent;
`

export interface ArrowProps {
  placement: string
  thickness?: string
}

export const Arrow = (props: ArrowProps) => {
  let thickness = props.thickness
  if (thickness === undefined || thickness == null) {
    thickness = '5px'
  }
  switch (props.placement) {
    case 'left':
      return <ArrowToRight thickness={thickness} />
    case 'top':
      return <ArrowToBottom thickness={thickness} />
    case 'right':
      return <ArrowToLeft thickness={thickness} />
    case 'bottom':
      return <ArrowToTop thickness={thickness} />
    default:
      throw new Error(`Invalid value for arrow pointsTo ${props.placement}`)
  }
}
