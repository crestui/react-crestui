import React, { useRef, useContext } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import styled, { ThemeContext } from 'styled-components'
import { Text } from '../text'
import { Button } from '../button'
import { Portal } from '../portal'
import { Flex } from '../flex'
import { useDisclosure } from '../../mixins/disclosure'
// eslint-disable-next-line no-unused-vars
import { UserSize, getIconSize } from '../../mixins/size'
// eslint-disable-next-line no-unused-vars
import { onAlignElementsFunc, onAlignElementsBottom } from '../overlay'
import { MQContext } from '../../contexts/mq'

export interface DropdownProps {
  label: string

  size?: UserSize

  onAlignElements?: onAlignElementsFunc

  children: React.ReactNode

  /**
   * event indicates the dropdown event to trigger opening the menu. One of 'click' / 'hover'
   */
  event?: string
}

const DropdownButton = styled(Button).attrs({
  type: 'button'
})``

export const Dropdown = (props: DropdownProps) => {
  const menuRef = useRef<HTMLButtonElement>(null)
  const disclosure = useDisclosure(false)
  const theme = useContext(ThemeContext)
  const mq = useContext(MQContext)
  const onAlignElements = props.onAlignElements
    ? props.onAlignElements
    : onAlignElementsBottom('left')
  const onElement = (el: HTMLDivElement): void => {
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
    el.addEventListener('mouseleave', () => {
      disclosure.setIsOpen(false)
    })
  }
  let hover = props.event ? props.event === 'hover' : false
  let focus = props.event ? props.event === 'focus' : false
  if (!hover && !focus) {
    throw new Error(
      `Dropdown event should be one of 'hover' / 'focus'. Current value: ${props.event}`
    )
  }
  if (!mq.isDesktopOrLaptop && hover) {
    hover = false
    focus = true
  }
  const onMouseEnter = () => {
    if (hover) {
      disclosure.setIsOpen(true)
    }
  }
  const onClick = () => {
    if (focus) {
      disclosure.setIsOpen()
    }
  }
  const iconSize = props.size ? getIconSize(theme, props.size) : '1.0rem'
  const textSize = props.size ? props.size : 'small'
  return (
    <DropdownButton ref={menuRef} link>
      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        alignContent='center'
        onMouseEnter={onMouseEnter}
        onClick={onClick}
      >
        <Text pr={2} fs={textSize}>
          {props.label}
        </Text>
        <div>
          {!disclosure.isOpen ? (
            <RiArrowDownSLine color={theme.colors.primary} size={iconSize} />
          ) : (
            <RiArrowUpSLine color={theme.colors.primary} size={iconSize} />
          )}
        </div>
      </Flex>
      <Portal
        disclosure={disclosure}
        onElement={onElement}
        closeOnMouseLeave={hover}
      >
        {disclosure.isOpen && props.children}
      </Portal>
    </DropdownButton>
  )
}
