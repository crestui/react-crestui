import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const defaultDomId = 'portal-root'

export type Coords = {
  left?: number
  top?: number
  right?: number
  bottom?: number
}

export interface PortalProps {
  children: React.ReactNode
  coords: Coords
  domId?: string
  moveLeft?: boolean
  zIndex?: string
}

/**
 *
 */
export const Portal = (props: PortalProps) => {
  let domId = props.domId
  if (domId === undefined || domId === null) {
    domId = defaultDomId
  }
  const mount = document.getElementById(domId)
  if (mount === null || mount === undefined) {
    console.warn(
      `No div of id ${domId} defined in index.html for separate portal use. Portals not supported hence`
    )
    throw Error(
      `No div of id ${domId} defined in index.html for separate portal use. Portals not supported hence`
    )
  }
  if (props.coords === undefined || props.coords === null) {
    return null
  }
  let zIndex = props.zIndex
  if (zIndex === undefined || zIndex === null) {
    zIndex = '10'
  }
  const el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.top = `${props.coords.top}px`
  el.style.zIndex = zIndex

  useEffect(() => {
    mount.appendChild(el)
    const rect = el.getBoundingClientRect()
    if (props.moveLeft && props.coords.left) {
      el.style.left = `${props.coords.left - rect.width}px`
    } else {
      el.style.left = `${props.coords.left}px`
    }
    return () => {
      mount.removeChild(el)
    }
  }, [el, mount])

  return createPortal(props.children, el)
}

export default Portal
