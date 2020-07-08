import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
// eslint-disable-next-line no-unused-vars
import IDisclosure from '../../mixins/disclosure'
import useOnClickOutside from 'use-onclickoutside'

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== `undefined`
    ? document.getElementById('portal-root')
    : null

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
  const el =
    typeof document !== `undefined` ? document.createElement('div') : null
  const portalRef = useRef<HTMLElement>(el)
  useOnClickOutside(portalRef, () => {
    props.disclosure.setIsOpen(false)
  })
  const closeOnMouseLeave = props.closeOnMouseLeave
    ? props.closeOnMouseLeave
    : false
  const onElement = props.onElement
  const zIndex =
    props.zIndex === undefined || props.zIndex === null
      ? defaultZIndex
      : props.zIndex
  const disclosure = props.disclosure
  useEffect(() => {
    if (portalRoot === null) {
      return
    }
    if (onElement === undefined || onElement === null) {
      throw new Error(`props.onElement function not defined`)
    }
    if (el === null) {
      return
    }
    portalRoot.appendChild(el)
    el.style.zIndex = zIndex.toString()
    if (closeOnMouseLeave) {
      el.addEventListener('mouseleave', () => {
        disclosure.setIsOpen(false)
      })
    }
    onElement(el)
    return () => {
      portalRoot.removeChild(el)
    }
  }, [onElement, closeOnMouseLeave, zIndex, disclosure, el])
  return el !== null ? createPortal(props.children, el) : null
}

export default Portal
