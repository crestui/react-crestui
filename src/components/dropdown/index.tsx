import React from 'react'
import styled from 'styled-components'
import { Button } from '../button'
// eslint-disable-next-line no-unused-vars
import { useDisclosure, IDisclosure } from '../../mixins/disclosure'

export const DropdownItem = styled.a`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  border: none;
  text-decoration: none;

  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${(props) =>
      props.theme.colors ? props.theme.colors.primary : 'inherit'};
  }

  &:active {
    color: ${(props) =>
      props.theme.colors ? props.theme.colors.primary : 'inherit'};
  }
`

const DropdownContentContainer = styled.div<{ disclosure: IDisclosure }>`
  position: absolute;
  vertical-align: baseline;
  box-sizing: border-box;
  display: block;
  top: 100%;
  opacity: ${(props) =>
    props.disclosure ? (props.disclosure.isOpen ? 1 : 0) : 0};
  z-index: ${(props) =>
    props.disclosure ? (props.disclosure.isOpen ? 6 : -1) : -1};
  background-color: white;
  margin: 0;
`

export interface DropdownHeaderProps {
  disclosure: IDisclosure
  label: string
  icon?: string
  placement?: string
}

const DropdownHeader = (props: DropdownHeaderProps) => {
  return (
    <Button
      onMouseEnter={() => props.disclosure.setIsOpen(true)}
      onMouseLeave={() => props.disclosure.setIsOpen(false)}
    >
      {props.label}
    </Button>
  )
}

const DropdownContainer = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  vertical-align: baseline;
  text-size-adjust: 100%;
`

export interface DropdownProps {
  label: string
  icon?: string
  placement?: string
  open?: boolean
  children: React.ReactNode
}

/**
 *
 */
export const Dropdown = (props: DropdownProps) => {
  const { label, icon, placement, children } = props
  const open = props.open ? props.open : false
  const disclosure = useDisclosure(open)
  return (
    <DropdownContainer>
      <DropdownHeader
        label={label}
        icon={icon}
        placement={placement}
        disclosure={disclosure}
      />
      <DropdownContentContainer disclosure={disclosure}>
        {children}
      </DropdownContentContainer>
    </DropdownContainer>
  )
}

export default Dropdown
