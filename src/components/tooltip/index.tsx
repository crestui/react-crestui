import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Overlay, OverlayProps } from '../overlay'
import { Box } from '../box'
import { Arrow } from '../arrow'

export interface TooltipProps {
  buttonText: string
  title: string
  text: string
}

/**
 *
 */
export const Tooltip = (props: TooltipProps & OverlayProps) => {
  const { buttonText, title, text, ...otherProps } = props
  if (
    buttonText !== undefined &&
    buttonText !== null &&
    props.containerRef !== undefined &&
    props.containerRef !== null
  ) {
    throw new Error(
      `Only one of buttonText or containerRef needs to be set, but not both`
    )
  }
  return (
    <Overlay {...otherProps}>
      <Arrow placement={props.placement} />
      <Box bg='tooltip' color='white' p={2} radius={0.2}>
        <span>{props.title}</span>
        <span>{props.text}</span>
      </Box>
    </Overlay>
  )
}
