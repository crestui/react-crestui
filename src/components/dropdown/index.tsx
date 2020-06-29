import React from 'react'
import styled from 'styled-components'
import { Button } from '../button'

export interface DropdownItemProps {
  label: string
}
export const DropdownItem = (props: DropdownItemProps) => {
  console.info(props)
  return null
}

export interface DropdownContentProps {
  children: React.ReactNode
}

const DropdownContent = (props: DropdownContentProps) => {
  console.info(props)
  return null
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
  return (
    <DropdownContainer>
      <DropdownHeader label={label} icon={icon} placement={placement} />
      <DropdownContent>{children}</DropdownContent>
    </DropdownContainer>
  )
}

export default Dropdown
