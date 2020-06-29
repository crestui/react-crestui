import React from 'react'
import styled from 'styled-components'
import { Button } from '../button'
import { useDisclosure, IDisclosure } from '../../mixins/disclosure'

export interface DropdownItemProps {
  label: string
}
export const DropdownItem = (props: DropdownItemProps) => {
  console.info(props)
  return null
}

export interface DropdownContentProps {
  disclosure: IDisclosure
  children: React.ReactNode
}

const DropdownContent = (props: DropdownContentProps) => {
  return props.disclosure.isOpen ? <div>Active Content Container</div> : null
}

export interface DropdownHeaderProps {
  label: string
  icon?: string
  placement?: string
}

const DropdownHeader = (props: DropdownHeaderProps) => {
  return <Button>{props.label}</Button>
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  box-sixing: border-box;
`

export interface DropdownProps {
  label: string
  icon?: string
  placement?: string
  children: React.ReactNode
}

/**
 *
 */
export const Dropdown = (props: DropdownProps) => {
  const { label, icon, placement, children } = props
  const disclosure = useDisclosure(false)
  return (
    <DropdownContainer>
      <DropdownHeader label={label} icon={icon} placement={placement} />
      <DropdownContent disclosure={disclosure}>{children}</DropdownContent>
    </DropdownContainer>
  )
}

export default Dropdown
