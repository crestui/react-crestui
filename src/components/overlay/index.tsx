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
  alignment: string
}

function getCoordsForLeft(
  containerNode: Element,
  alignment: string,
  overlayRect: DOMRect
): Coords {
  const containerRect = containerNode.getBoundingClientRect()
  switch (alignment) {
    case 'top':
      return {
        left: containerRect.x,
        top: containerRect.y + window.scrollY
      }
    case 'bottom':
      return {
        left: containerRect.x,
        top:
          containerRect.y +
          window.scrollY +
          containerRect.height -
          overlayRect.height
      }
    default:
      throw new Error(
        `Unknown alignment for 'right' placement position ${alignment}`
      )
  }
}

function getCoordsForTop(
  containerNode: Element,
  alignment: string,
  overlayRect: DOMRect
): Coords {
  const containerRect = containerNode.getBoundingClientRect()
  switch (alignment) {
    case 'left':
      return {
        left: containerRect.x,
        top: containerRect.y + window.scrollY - overlayRect.height
      }
    case 'right':
      return {
        left: containerRect.x + containerRect.width - overlayRect.width,
        top: containerRect.y + window.scrollY - overlayRect.height
      }
    default:
      throw new Error(
        `Unknown alignment for 'top' placement position ${alignment}`
      )
  }
}

function getCoordsForRight(
  containerNode: Element,
  alignment: string,
  overlayRect: DOMRect
): Coords {
  const containerRect = containerNode.getBoundingClientRect()
  switch (alignment) {
    case 'top':
      return {
        left: containerRect.x + containerRect.width,
        top: containerRect.y + window.scrollY
      }
    case 'bottom':
      return {
        left: containerRect.x + containerRect.width,
        top:
          containerRect.y +
          window.scrollY +
          containerRect.height -
          overlayRect.height
      }
    default:
      throw new Error(
        `Unknown alignment for 'right' placement position ${alignment}`
      )
  }
}

function getCoordsForBottom(
  containerNode: Element,
  alignment: string,
  overlayRect: DOMRect
): Coords {
  const containerRect = containerNode.getBoundingClientRect()
  switch (alignment) {
    case 'left':
      return {
        left: containerRect.x,
        top: containerRect.y + containerRect.height + window.scrollY
      }
    case 'right':
      return {
        left: containerRect.x + containerRect.width - overlayRect.width,
        top: containerRect.y + containerRect.height + window.scrollY
      }
    default:
      throw new Error(
        `Unknown alignment for 'bottom' placement position ${alignment}`
      )
  }
}

function getCoords(
  containerNode: Element,
  placement: string,
  alignment: string,
  overlayRect: DOMRect
): Coords {
  switch (placement) {
    case 'top':
      return getCoordsForTop(containerNode, alignment, overlayRect)
      break
    case 'left':
      return getCoordsForLeft(containerNode, alignment, overlayRect)
      break
    case 'bottom':
      return getCoordsForBottom(containerNode, alignment, overlayRect)
      break
    case 'right':
      return getCoordsForRight(containerNode, alignment, overlayRect)
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
      props.alignment,
      overlayRect
    )
  }
  if (!props.disclosure.isOpen) {
    return null
  }
  return <Portal onRect={onRect}>{props.children}</Portal>
}

export default Overlay
