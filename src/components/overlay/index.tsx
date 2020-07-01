import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { Portal, Coords } from '../portal'
// eslint-disable-next-line no-unused-vars
import { IDisclosure } from '../../mixins/disclosure'

interface LocalOverlayProps {
  children: React.ReactNode
  overlayRef: React.RefObject<HTMLDivElement>
}

export interface OverlayProps {
  containerRef: React.RefObject<HTMLButtonElement>
  disclosure: IDisclosure
  placement: string
  position: string
}

function getCoords(
  containerNode: Element,
  placement: string,
  position: string
): Coords {
  if (placement === undefined || placement === null) {
    placement = 'top'
  }
  const containerRect = containerNode.getBoundingClientRect()
  switch (placement) {
    case 'top':
      switch (position) {
        case 'begin': {
          return {
            left: containerRect.x,
            top: containerRect.y + window.scrollY
          }
        }
        case 'middle': {
          return {
            left: containerRect.x + containerRect.width / 2,
            top: containerRect.y + window.scrollY
          }
        }
        case 'end':
          return {
            left: containerRect.x + containerRect.width,
            top: containerRect.y + window.scrollY
          }
        default:
          throw new Error(`Invalid value for position for overlay ${position}`)
      }
      break
    case 'left':
      switch (position) {
        case 'begin':
          return {
            left: containerRect.x,
            top: containerRect.y + window.scrollY
          }
        case 'middle':
          return {
            left: containerRect.x,
            top: containerRect.y + containerRect.height / 2 + window.scrollY
          }
        case 'end':
          return {
            left: containerRect.x,
            top: containerRect.y + containerRect.height + window.scrollY
          }
        default:
          throw new Error(`Invalid value for position for overlay ${position}`)
      }
      break
    case 'bottom':
      switch (position) {
        case 'begin':
          return {
            left: containerRect.x,
            top: containerRect.y + containerRect.height + window.scrollY
          }
        case 'middle':
          return {
            left: containerRect.x + containerRect.width / 2,
            top: containerRect.y + containerRect.height + window.scrollY
          }
        case 'end':
          return {
            left: containerRect.x + containerRect.width,
            top: containerRect.y + containerRect.height + window.scrollY
          }
        default:
          throw new Error(`Invalid value for position for overlay ${position}`)
      }
      break
    case 'right':
      switch (position) {
        case 'begin':
          return {
            left: containerRect.x + containerRect.width,
            top: containerRect.y + window.scrollY
          }
        case 'middle':
          return {
            left: containerRect.x + containerRect.width,
            top: containerRect.y + containerRect.height / 2 + window.scrollY
          }
        case 'end':
          return {
            left: containerRect.x + containerRect.width,
            top: containerRect.y + containerRect.height + window.scrollY
          }
        default:
          throw new Error(`Invalid value for position for overlay ${position}`)
      }
      break
    default:
      throw new Error(
        `Invalid value for placement attribute to overlay - ${placement}. Not Supported`
      )
  }
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
    setCoords(getCoords(containerNode, props.placement, props.position))
    if (props.placement) {
      setMoveLeft(props.placement === 'left')
    }
  }, [containerNode])
  if (!props.disclosure.isOpen) {
    return null
  }
  return (
    <Portal coords={coords} moveLeft={moveLeft}>
      {props.children}
    </Portal>
  )
}

export default Overlay
