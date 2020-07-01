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
  onRect: (rect: DOMRect) => Coords
  domId?: string
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
  if (props.onRect === undefined || props.onRect === null) {
    throw new Error(`onRect function not defined`)
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
  let zIndex = props.zIndex
  if (zIndex === undefined || zIndex === null) {
    zIndex = '10'
  }
  const el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.zIndex = zIndex

  useEffect(() => {
    mount.appendChild(el)
    const rect = el.getBoundingClientRect()
    console.info(`AfterRect ${JSON.stringify(rect)}`)
    const coords = props.onRect(rect)
    el.style.left = `${coords.left}px`
    el.style.top = `${coords.top}px`
    return () => {
      mount.removeChild(el)
    }
  }, [el, mount])

  return createPortal(props.children, el)
}

export default Portal
