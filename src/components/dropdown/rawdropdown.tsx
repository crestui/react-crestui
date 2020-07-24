import React, { useRef, useEffect, useCallback } from 'react'
import { Portal } from 'react-portal'
import useOnClickOutside from 'use-onclickoutside'
import IDisclosure from '../../contexts/disclosure'
import { onAlignElementsFunc, onAlignElementsBottom } from '../overlay'

export interface RawDropdownProps {
  onAlignElements?: onAlignElementsFunc

  disclosure: IDisclosure

  portalContent: React.ReactNode

  children: React.ReactNode
}

export const RawDropdown = (props: RawDropdownProps) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const disclosure = props.disclosure
  const onAlignElements = props.onAlignElements
    ? props.onAlignElements
    : onAlignElementsBottom('left')
  const portalRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(portalRef, () => {
    disclosure.setIsOpen(false)
  })
  const onElement = useCallback(
    (el: HTMLDivElement): void => {
      el.style.position = 'fixed'
      if (menuRef === undefined || menuRef === null) {
        return
      }
      const menuNode = menuRef.current
      if (menuNode === undefined || menuNode === null) {
        return
      }
      const coords = onAlignElements(menuNode, el)
      el.style.left = `${coords.left}px`
      el.style.top = `${coords.top}px`
    },
    [onAlignElements]
  )
  useEffect(() => {
    if (portalRef === undefined || portalRef === null) {
      return
    }
    const portalNode = portalRef.current
    if (portalNode === undefined || portalNode === null) {
      return
    }
    onElement(portalNode)
  }, [portalRef, onElement])
  return (
    <div ref={menuRef}>
      {props.children}
      <Portal>
        <div ref={portalRef}>{disclosure.isOpen && props.portalContent}</div>
      </Portal>
    </div>
  )
}
