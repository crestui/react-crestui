import React from 'react'
import styled from 'styled-components'

export interface DropdownItemProps {
  label: string
}
export const DropdownItem = (props: DropdownItemProps) => {
  console.info(props)
  return null
}

export interface DropdownHeaderProps {
  label: string
  icon?: string
  placement?: string
}

const DropdownHeader = (props: DropdownHeaderProps) => {
  console.info(props)
  return null
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
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
      {children}
    </DropdownContainer>
  )
}

export default Dropdown
