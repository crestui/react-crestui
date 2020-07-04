import { useEffect } from 'react'
import { createPortal } from 'react-dom'
// eslint-disable-next-line no-unused-vars
import IDisclosure from '../../mixins/disclosure'

export const defaultPortalRootId = 'portal-root'

export const defaultZIndex = 10

export interface PortalProps {
  /**
   * closeOnMouseLeave indicates if there is a mouseleave event ,
   * this portal should set the disclosure to be false
   */
  closeOnMouseLeave?: boolean

  /**
   *
   */
  disclosure: IDisclosure

  /**
   * The actual description of the portal
   */
  children: React.ReactNode

  /**
   * onElement represents a function to act on the newly created element
   *
   * It takes in the newly created HTMLDivElement of the portal so the coords can be computed
   */
  onElement: (el: HTMLDivElement) => void

  /**
   * portalRootId represents the id of the div in index.html under which portals are created.
   *
   * If not given, it defaults to 'defaultPortalRootId' variable published from react-crestui ( i.e. 'portal-root ).
   *
   * Unless there is a collision with the same div id, for most practical purposes, this variable is best left untouched
   *
   */
  portalRootId?: string

  /**
   * zIndex represents the zIndex to be given for this portal.
   *
   * If not given, it defaults to 'defaultZIndex' variable published from react-crestui ( i.e. 10 ).
   *
   */
  zIndex?: number
}

/**
 *
 */
export const Portal = (props: PortalProps) => {
  let portalRootId = props.portalRootId
  if (portalRootId === undefined || portalRootId === null) {
    portalRootId = defaultPortalRootId
  }
  if (props.onElement === undefined || props.onElement === null) {
    throw new Error(`onElement function not defined`)
  }
  const mount = document.getElementById(portalRootId)
  if (mount === null || mount === undefined) {
    throw Error(
      `No div of id ${portalRootId} defined in index.html for separate portal use. Portals not supported hence`
    )
  }
  let zIndex = props.zIndex
  if (zIndex === undefined || zIndex === null) {
    zIndex = defaultZIndex
  }
  const el = document.createElement('div')
  const closeOnMouseLeave = props.closeOnMouseLeave
    ? props.closeOnMouseLeave
    : false
  if (closeOnMouseLeave) {
    el.addEventListener('mouseleave', () => {
      props.disclosure.setIsOpen(false)
    })
  }
  el.style.zIndex = zIndex.toString()
  useEffect(() => {
    mount.appendChild(el)
    props.onElement(el)
    return () => {
      mount.removeChild(el)
    }
  }, [el, mount, closeOnMouseLeave])

  return createPortal(props.children, el)
}

export default Portal
