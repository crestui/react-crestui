import React, { useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { Overlay, OverlayProps } from '../overlay'
import { Box } from '../box'

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
      <Box variant='tooltip' ref={overlayRef} p={1}>
        <span>{props.text}</span>
      </Box>
    </Overlay>
  )
}
