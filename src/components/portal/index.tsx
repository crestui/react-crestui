import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export const defaultDomId = 'portal-root'

export type Coords = {
  left?: number
  top?: number
}

export interface PortalProps {
  children: React.ReactNode
  onPositionElement: (el: HTMLDivElement) => Coords | null
  portalRootId?: string
  zIndex?: string
}

/**
 *
 */
export const Portal = (props: PortalProps) => {
  let portalRootId = props.portalRootId
  if (portalRootId === undefined || portalRootId === null) {
    portalRootId = defaultDomId
  }
  if (
    props.onPositionElement === undefined ||
    props.onPositionElement === null
  ) {
    throw new Error(`onPositionElement function not defined`)
  }
  const mount = document.getElementById(portalRootId)
  if (mount === null || mount === undefined) {
    throw Error(
      `No div of id ${portalRootId} defined in index.html for separate portal use. Portals not supported hence`
    )
  }
  let zIndex = props.zIndex
  if (zIndex === undefined || zIndex === null) {
    zIndex = '10'
  }
  const el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.zIndex = zIndex

  useEffect(() => {
    mount.appendChild(el)
    const coords = props.onPositionElement(el)
    if (coords === undefined || coords === null) {
      return
    }
    el.style.left = `${coords.left}px`
    el.style.top = `${coords.top}px`
    return () => {
      mount.removeChild(el)
    }
  }, [el, mount])

  return createPortal(props.children, el)
}

export default Portal
