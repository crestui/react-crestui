import React, { useRef } from 'react'
import { Box } from '../box'
import { Arrow } from '../arrow'
import { Button } from '../button'
import { Overlay, OverlayProps } from '../overlay'
import { useDisclosure } from '../../contexts/disclosure'

export interface TooltipProps {
  buttonText?: string
  title: string
  text: string
}

const validateArgs = (props: TooltipProps & OverlayProps) => {
  const { buttonText, containerRef } = props
  if (
    buttonText !== undefined &&
    buttonText !== null &&
    containerRef !== undefined &&
    containerRef !== null
  ) {
    throw new Error(
      `Only one of buttonText or containerRef needs to be set, but not both`
    )
  }
  if (
    buttonText === undefined &&
    buttonText === null &&
    containerRef === undefined &&
    containerRef === null
  ) {
    throw new Error(
      `At least one of buttonText or containerRef needs to be set, none being set now`
    )
  }
}

const OverlayNode = (props: TooltipProps & OverlayProps) => {
  return (
    <Overlay {...props}>
      <Arrow placement={props.placement} alignment={props.alignment} />
      <Box bg='tooltip' color='white' p={2} radius='0.2rem'>
        <span>{props.title}</span>
        <span>{props.text}</span>
      </Box>
    </Overlay>
  )
}

/**
 *
 */
export const Tooltip = (props: TooltipProps & OverlayProps) => {
  const { buttonText, containerRef, disclosure, ...otherProps } = props
  const buttonRef = useRef(null)
  const localdisclosure = useDisclosure(false)
  validateArgs(props)
  if (
    containerRef === undefined &&
    containerRef === null &&
    buttonText !== undefined &&
    buttonText !== null
  ) {
    return (
      <div>
        <Button
          bg='primary'
          ref={buttonRef}
          color='white'
          onClick={() => {
            localdisclosure.toggleOpen()
          }}
          px={7}
          py={2}>
          {props.buttonText}
        </Button>
        <OverlayNode
          containerRef={buttonRef}
          disclosure={localdisclosure}
          {...otherProps}
        />
      </div>
    )
  } else {
    return <OverlayNode {...props} />
  }
}
