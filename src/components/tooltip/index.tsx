import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Overlay, OverlayProps } from '../overlay'
import { Box } from '../box'
import { Arrow } from '../arrow'

export interface TooltipProps {
  title: string
  text: string
}

/**
 *
 */
export const Tooltip = (props: TooltipProps & OverlayProps) => {
  const { text, ...otherProps } = props
  return (
    <Overlay {...otherProps}>
      <Arrow placement={props.placement} />
      <Box bg='tooltip' color='white' p={2} radius={0.2}>
        <span>{props.text}</span>
      </Box>
    </Overlay>
  )
}
