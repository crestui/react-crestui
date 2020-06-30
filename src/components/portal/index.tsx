import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children: React.ReactNode
}

/**
 *
 */
export const Portal = (props: PortalProps) => {
  const mount = document.getElementById('portal-root')
  if (mount === null || mount === undefined) {
    console.warn(
      'No div of portal-root defined in index.html for use. Portals not supported hence'
    )
    return
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
