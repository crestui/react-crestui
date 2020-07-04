import React, { useRef, useContext } from 'react'
import { GrFormDown, GrFormUp } from 'react-icons/gr'
import { ThemeContext } from 'styled-components'
import { Text } from '../text'
import { Button } from '../button'
import { Portal } from '../portal'
import { Flex } from '../flex'
import { useDisclosure } from '../../mixins/disclosure'
// eslint-disable-next-line no-unused-vars
import { onAlignElementsFunc, onAlignElementsBottom } from '../overlay'

export interface DropdownProps {
  label: string

  size?: string

  onAlignElements?: onAlignElementsFunc

  children: React.ReactNode

  /**
   * event indicates the dropdown event to trigger opening the menu. One of 'click' / 'hover'
   */
  event?: string
}

export const Dropdown = (props: DropdownProps) => {
  const menuRef = useRef<HTMLButtonElement>(null)
  const disclosure = useDisclosure(false)
  const theme = useContext(ThemeContext)
  const onAlignElements = props.onAlignElements
    ? props.onAlignElements
    : onAlignElementsBottom('left')
  const onElement = (el: HTMLDivElement): void => {
    el.style.position = 'absolute'
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
    el.addEventListener('mouseleave', () => {
      disclosure.setIsOpen(false)
    })
  }
  const hover = props.event ? props.event === 'hover' : false
  const click = props.event ? props.event === 'click' : false
  if (!hover && !click) {
    throw new Error(
      `Dropdown event should be one of 'hover' / 'click'. Current value: ${props.event}`
    )
  }
  let onMouseEnter = () => {}
  if (hover) {
    onMouseEnter = () => {
      disclosure.toggleOpen()
    }
  }
  let onClick = () => {}
  if (click) {
    onClick = () => {
      disclosure.toggleOpen()
    }
  }
  return (
    <Button ref={menuRef}>
      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        onMouseEnter={onMouseEnter}
        onClick={onClick}
      >
        <Text
          style={{
            paddingRight: '1rem'
          }}
        >
          {props.label}
        </Text>
        {!disclosure.isOpen ? (
          <GrFormDown color={theme.colors.focus} size='1.5rem' />
        ) : (
          <GrFormUp color={theme.colors.focus} size='1.5rem' />
        )}
      </Flex>
      {disclosure.isOpen ? (
        <Portal
          disclosure={disclosure}
          onElement={onElement}
          closeOnMouseLeave={hover}
        >
          {props.children}
        </Portal>
      ) : null}
    </Button>
  )
}
