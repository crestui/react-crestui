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
  console.info(placement)
  const rect = node.getBoundingClientRect()
  return {
    left: rect.x + rect.width / 2,
    top: rect.y + window.scrollY
  }
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
