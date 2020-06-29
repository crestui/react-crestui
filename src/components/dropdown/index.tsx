import React from 'react'
import styled from 'styled-components'
import { Button } from '../button'
// eslint-disable-next-line no-unused-vars
import { useDisclosure, IDisclosure } from '../../mixins/disclosure'

export const DropdownItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors ? props.theme.colors.primary : 'inherit'};
  }

  a {
    text-decoration: none;
  }
`

const DropdownContentContainer = styled.ul<{ disclosure: IDisclosure }>`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  flex-direction: column;
  opacity: ${(props) =>
    props.disclosure ? (props.disclosure.isOpen ? 1 : 0) : 0};
  z-index: ${(props) =>
    props.disclosure ? (props.disclosure.isOpen ? 6 : -1) : -1};
  background-color: white;
  margin: 0;
  width: 40rem;
`

export interface DropdownHeaderProps {
  disclosure: IDisclosure
  label: string
  icon?: string
  placement?: string
}

const DropdownHeader = (props: DropdownHeaderProps) => {
  return (
    <Button onMouseEnter={() => props.disclosure.setIsOpen(true)}>
      {props.label}
    </Button>
  )
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
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
