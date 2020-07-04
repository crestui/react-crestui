import React, { useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { Portal } from '../portal'
// eslint-disable-next-line no-unused-vars
import { IDisclosure } from '../../mixins/disclosure'

export type Coords = {
  left: number
  top: number
}

interface LocalOverlayProps {
  children: React.ReactNode
}

export interface OverlayProps {
  containerRef?: React.RefObject<HTMLButtonElement>
  disclosure?: IDisclosure
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
  if (props.containerRef === undefined || props.containerRef === null) {
    return null
  }
  if (props.disclosure === undefined || props.disclosure === null) {
    return null
  }
  let containerNode = props.containerRef.current
  useEffect(() => {
    if (props.containerRef === undefined || props.containerRef === null) {
      return
    }
    containerNode = props.containerRef.current
  }, [props.containerRef])
  if (containerNode === undefined || containerNode === null) {
    return null
  }
  const onElement = (el: HTMLDivElement): void => {
    const overlayRect = el.getBoundingClientRect()
    if (containerNode === undefined || containerNode === null) {
      return
    }
    const coords = getCoords(
      containerNode,
      props.placement,
      props.alignment,
      overlayRect
    )
    el.style.position = 'absolute'
    el.style.left = `${coords.left}px`
    el.style.top = `${coords.top}px`
  }
  if (!props.disclosure.isOpen) {
    return null
  }
  return <Portal onElement={onElement}>{props.children}</Portal>
}

export default Overlay
