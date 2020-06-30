import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const defaultDomId = 'portal-root'

export interface PortalProps {
  domId?: string
  children: React.ReactNode
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
      'No div of portal-root defined in index.html for use. Portals not supported hence'
    )
    throw Error(
      'No div of portal-root defined in index.html for use. Portals not supported hence'
    )
  }
  const el = document.createElement('div')

  useEffect(() => {
    mount.appendChild(el)
    return () => {
      mount.removeChild(el)
    }
  }, [el, mount])

  return createPortal(props.children, el)
}

export default Portal
