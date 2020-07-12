import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
// eslint-disable-next-line no-unused-vars
import { portalRoot, defaultZIndex, PortalProps } from './portal-props'
import useOnClickOutside from 'use-onclickoutside'

/**
 *
 */
export const PortalFuncComponent = (props: PortalProps) => {
  const el =
    typeof document !== `undefined` ? document.createElement('div') : null
  const portalRef = useRef<HTMLElement>(el)
  useOnClickOutside(portalRef, () => {
    props.disclosure.setIsOpen(false)
  })
  useEffect(() => {
    if (portalRoot === null || el === null) {
      return
    }
    portalRoot.appendChild(el)
    console.info(`Adding new element`)
    return () => {
      if (portalRoot === null || el === null) {
        return
      }
      portalRoot.removeChild(el)
    }
  }, [el])
  const closeOnMouseLeave = props.closeOnMouseLeave
    ? props.closeOnMouseLeave
    : false
  const zIndex =
    props.zIndex === undefined || props.zIndex === null
      ? defaultZIndex
      : props.zIndex
  const disclosure = props.disclosure
  if (el !== null) {
    el.style.zIndex = zIndex.toString()
    if (closeOnMouseLeave) {
      el.addEventListener('mouseleave', () => {
        disclosure.setIsOpen(false)
      })
    }
    return createPortal(props.children, el)
  } else {
    return null
  }
}

export default PortalFuncComponent
