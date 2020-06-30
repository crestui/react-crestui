import React, { useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { Overlay, OverlayProps } from '../overlay'
import { Box } from '../box'

export interface TooltipProps {
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
      <Box
        ref={overlayRef}
        style={{
          background: 'lightgray'
        }}
      >
        <span>{props.text}</span>
      </Box>
    </Overlay>
  )
}
