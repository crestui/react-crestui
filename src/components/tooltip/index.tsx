import React, { useRef } from 'react'
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
  const overlayRef = useRef(null)
  return (
    <Overlay overlayRef={overlayRef} {...otherProps}>
      <Arrow placement={props.placement} />
      <Box variant='tooltip' color='white' ref={overlayRef} p={1} radius={0.2}>
        <span>{props.text}</span>
      </Box>
    </Overlay>
  )
}
