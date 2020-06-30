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
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'top-middle':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'top-right':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'left-top':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'left-middle':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'left-bottom':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'bottom-left':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'bottom-middle':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'bottom-right':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'right-top':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'right-middle':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    case 'right-bottom':
      return {
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY
      }
    default:
      throw new Error(
        `Placement for overlay ${placement} invalid. Not Supported`
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
    setCoords(getCoords(node))
  }, [node])
  return (
    props.disclosure.isOpen && <Portal coords={coords}>{props.children}</Portal>
  )
}

export default Overlay
