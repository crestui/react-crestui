import React, { useState, useEffect } from 'react'
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
  placement?: string
}

function getCoords(node: Element, placement?: string): Coords {
  if (placement === undefined || placement === null) {
    placement = 'top-left'
  }
  const rect = node.getBoundingClientRect()
  switch (placement) {
    case 'top-left':
      return {
        left: rect.x,
        top: rect.y + window.scrollY
      }
    case 'top-middle':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'top-right':
      return {
        left: rect.x + rect.width,
        top: rect.y + window.scrollY
      }
    case 'left-top':
      return {
        bottom: rect.y + window.scrollY,
        right: rect.x
      }
    case 'left-middle':
      return {
        bottom: rect.y + rect.height / 2 + window.scrollY,
        right: rect.x
      }
    case 'left-bottom':
      return {
        bottom: rect.y + rect.height + window.scrollY,
        right: rect.x
      }
    case 'bottom-left':
      return {
        left: rect.x,
        top: rect.y + rect.height + window.scrollY
      }
    case 'bottom-middle':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + rect.height + window.scrollY
      }
    case 'bottom-right':
      return {
        left: rect.x + rect.width,
        top: rect.y + rect.height + window.scrollY
      }
    case 'right-top':
      return {
        left: rect.x + rect.width,
        top: rect.y + window.scrollY
      }
    case 'right-middle':
      return {
        left: rect.x + rect.width,
        top: rect.y + rect.height / 2 + window.scrollY
      }
    case 'right-bottom':
      return {
        left: rect.x + rect.width,
        top: rect.y + rect.height + window.scrollY
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
  const node = props.containerRef.current
  useEffect(() => {
    if (node === undefined || node === null) {
      return
    }
    setCoords(getCoords(node, props.placement))
  }, [node])
  if (!props.disclosure.isOpen) {
    return null
  }
  return <Portal coords={coords}>{props.children}</Portal>
}

export default Overlay
