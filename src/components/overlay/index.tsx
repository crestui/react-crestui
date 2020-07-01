import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Portal, Coords } from '../portal'
// eslint-disable-next-line no-unused-vars
import { IDisclosure } from '../../mixins/disclosure'

interface LocalOverlayProps {
  children: React.ReactNode
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
  position: string,
  overlayRect: DOMRect
): Coords {
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
            left: containerRect.x - overlayRect.width / 2,
            top: containerRect.y + containerRect.height + window.scrollY
          }
        case 'middle':
          return {
            left:
              containerRect.x + containerRect.width / 2 - overlayRect.width / 2,
            top: containerRect.y + containerRect.height + window.scrollY + 5
          }
        case 'end':
          return {
            left: containerRect.x + containerRect.width - overlayRect.width / 2,
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
  const containerNode = props.containerRef.current
  if (containerNode === undefined || containerNode === null) {
    return null
  }
  const onRect = (overlayRect: DOMRect): Coords => {
    return getCoords(
      containerNode,
      props.placement,
      props.position,
      overlayRect
    )
  }
  if (!props.disclosure.isOpen) {
    return null
  }
  return <Portal onRect={onRect}>{props.children}</Portal>
}

export default Overlay
