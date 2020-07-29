import React, { useRef, useContext } from 'react'
import { RawDropdown } from './rawdropdown'
import { UpArrowAlt, DownArrowAlt } from '@styled-icons/boxicons-regular'
import styled, { ThemeContext } from 'styled-components'
import { Text } from '../text'
import { Button } from '../button'
import { Flex } from '../flex'
import { useDisclosure } from '../../contexts/disclosure'
import { ComponentSize, getIconSize } from '../../mixins/size'
import { onAlignElementsFunc } from '../overlay'
import { MQContext } from '../../contexts/mq'

export interface DropdownProps {
  label: string

  size?: ComponentSize

  onAlignElements?: onAlignElementsFunc

  children: React.ReactNode

  /**
   * event indicates the dropdown event to trigger opening the menu. One of 'click' / 'hover'
   */
  event?: string
}

const DropdownButton = styled(Button).attrs({
  type: 'button',
})``

export const Dropdown = (props: DropdownProps) => {
  const menuRef = useRef<HTMLButtonElement>(null)
  const disclosure = useDisclosure(false)
  const theme = useContext(ThemeContext)
  const mq = useContext(MQContext)
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
      disclosure.toggleOpen()
    }
  }
  const iconSize = props.size ? getIconSize(theme, props.size) : '1.0rem'
  const textSize = props.size ? props.size : 'small'
  return (
    <RawDropdown
      onAlignElements={props.onAlignElements}
      disclosure={disclosure}
      portalContent={props.children}>
      <DropdownButton ref={menuRef} link>
        <Flex
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
          alignContent='center'
          onMouseEnter={onMouseEnter}
          onClick={onClick}>
          <Text pr={2} fs={textSize}>
            {props.label}
          </Text>
          <div>
            {!disclosure.isOpen ? (
              <DownArrowAlt color={theme.colors.primary} size={iconSize} />
            ) : (
              <UpArrowAlt color={theme.colors.primary} size={iconSize} />
            )}
          </div>
        </Flex>
      </DropdownButton>
    </RawDropdown>
  )
}
