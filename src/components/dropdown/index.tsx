import React, { useRef, useContext } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { ThemeContext } from 'styled-components'
import { Text } from '../text'
import { Button } from '../button'
import { Portal } from '../portal'
import { Flex } from '../flex'
import { useDisclosure } from '../../mixins/disclosure'
// eslint-disable-next-line no-unused-vars
import { onAlignElementsFunc, onAlignElementsBottom } from '../overlay'
import { MQContext } from '../../contexts/mq'

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
  const mq = useContext(MQContext)
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
  let hover = props.event ? props.event === 'hover' : false
  let click = props.event ? props.event === 'click' : false
  if (!hover && !click) {
    throw new Error(
      `Dropdown event should be one of 'hover' / 'click'. Current value: ${props.event}`
    )
  }
  if (!mq.isDesktopOrLaptop && hover) {
    hover = false
    click = true
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
  console.info(`svg color: ${theme.colors.focus}`)
  const size = props.size ? props.size : '1.0rem'
  return (
    <Button ref={menuRef} radius='2px' link>
      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        onMouseEnter={onMouseEnter}
        onClick={onClick}
      >
        <Text
          style={{
            paddingRight: '0.5rem'
          }}
        >
          {props.label}
        </Text>
        {!disclosure.isOpen ? (
          <RiArrowDownSLine color={theme.colors.primary} size={size} />
        ) : (
          <RiArrowUpSLine color={theme.colors.primary} size={size} />
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
