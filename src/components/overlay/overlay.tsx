import React from 'react'
// eslint-disable-next-line no-unused-vars
import { PortalFuncComponent } from '../portal'
// eslint-disable-next-line no-unused-vars
import { IDisclosure } from '../../mixins/disclosure'
import { getCoords } from './align'

interface LocalOverlayProps {
  children: React.ReactNode
}

export interface OverlayProps {
  containerRef?: React.RefObject<HTMLButtonElement>
  disclosure?: IDisclosure
  placement: string
  alignment: string
}

/**
 *
 */
export const Overlay = (props: OverlayProps & LocalOverlayProps) => {
  if (props.containerRef === undefined || props.containerRef === null) {
    return null
  }
  if (props.disclosure === undefined || props.disclosure === null) {
    return null
  }
  const onElement = (el: HTMLDivElement): void => {
    if (props.containerRef === undefined || props.containerRef === null) {
      return
    }
    const containerNode = props.containerRef.current
    if (containerNode === undefined || containerNode === null) {
      return
    }
    const coords = getCoords(
      containerNode,
      props.placement,
      props.alignment,
      el
    )
    el.style.position = 'absolute'
    el.style.left = `${coords.left}px`
    el.style.top = `${coords.top}px`
  }
  if (!props.disclosure.isOpen) {
    return null
  }
  return (
    <PortalFuncComponent disclosure={props.disclosure} onElement={onElement}>
      {props.children}
    </PortalFuncComponent>
  )
}

export default Overlay
