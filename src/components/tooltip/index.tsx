import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Overlay, OverlayProps } from '../overlay'

export interface TooltipProps {
  text: string
}

/**
 *
 */
export const Tooltip = (props: TooltipProps & OverlayProps) => {
  const { text, ...otherProps } = props
  return (
    <Overlay {...otherProps}>
      <span>{props.text}</span>
    </Overlay>
  )
}
