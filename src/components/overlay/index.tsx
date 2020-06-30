import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { Portal, Coords } from '../portal'
// eslint-disable-next-line no-unused-vars
import { IDisclosure } from '../../mixins/disclosure'
import { Box } from '../box'

const ArrowBox = styled(Box)`
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
`

interface LocalOverlayProps {
  children: React.ReactNode
  overlayRef: React.RefObject<HTMLDivElement>
}

export interface OverlayProps {
  containerRef: React.RefObject<HTMLButtonElement>
  disclosure: IDisclosure
  placement?: string
}

function getCoords(containerNode: Element, placement?: string): Coords {
  if (placement === undefined || placement === null) {
    placement = 'top-left'
  }
  const containerRect = containerNode.getBoundingClientRect()
  switch (placement) {
    case 'top-left':
      return {
        left: containerRect.x,
        top: containerRect.y + window.scrollY
      }
    case 'top-middle':
      return {
        left: containerRect.x + containerRect.width / 2,
        top: containerRect.y + window.scrollY
      }
    case 'top-right':
      return {
        left: containerRect.x + containerRect.width,
        top: containerRect.y + window.scrollY
      }
    case 'left-top':
      return {
        left: containerRect.x,
        top: containerRect.y + window.scrollY
      }
    case 'left-middle':
      return {
        left: containerRect.x,
        top: containerRect.y + containerRect.height / 2 + window.scrollY
      }
    case 'left-bottom':
      return {
        left: containerRect.x,
        top: containerRect.y + containerRect.height + window.scrollY
      }
    case 'bottom-left':
      return {
        left: containerRect.x,
        top: containerRect.y + containerRect.height + window.scrollY
      }
    case 'bottom-middle':
      return {
        left: containerRect.x + containerRect.width / 2,
        top: containerRect.y + containerRect.height + window.scrollY
      }
    case 'bottom-right':
      return {
        left: containerRect.x + containerRect.width,
        top: containerRect.y + containerRect.height + window.scrollY
      }
    case 'right-top':
      return {
        left: containerRect.x + containerRect.width,
        top: containerRect.y + window.scrollY
      }
    case 'right-middle':
      return {
        left: containerRect.x + containerRect.width,
        top: containerRect.y + containerRect.height / 2 + window.scrollY
      }
    case 'right-bottom':
      return {
        left: containerRect.x + containerRect.width,
        top: containerRect.y + containerRect.height + window.scrollY
      }
    default:
      throw new Error(
        `Invalid value for placement attribute to overlay - ${placement}. Not Supported`
      )
  }
  console.info(placement)
}

/**
 *
 */
export const Overlay = (props: OverlayProps & LocalOverlayProps) => {
  const [coords, setCoords] = useState<Coords>({ left: 0, top: 0 })
  const [moveLeft, setMoveLeft] = useState(false)
  const containerNode = props.containerRef.current
  useEffect(() => {
    if (containerNode === undefined || containerNode === null) {
      return
    }
    setCoords(getCoords(containerNode, props.placement))
    if (props.placement) {
      setMoveLeft(props.placement.startsWith('left'))
    }
  }, [containerNode])
  if (!props.disclosure.isOpen) {
    return null
  }
  return (
    <Portal coords={coords} moveLeft={moveLeft}>
      <ArrowBox />
      {props.children}
    </Portal>
  )
}

export default Overlay
