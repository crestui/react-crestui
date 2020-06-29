import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../theming'

export const MenuDivider = styled.div`
  display: inline-block;
`

export interface MenuItemProps {
  label: string
}

export const MenuItem = styled.div<MenuItemProps>`
  display: inline-block;
`

export interface MenuProps {
  children: React.ReactNode
}

const MenuContainer = styled.div`
  position: relative;
`

/**
 *
 */
export const Menu = (props: MenuProps) => {
  const theme = useContext(ThemeContext)
  console.info(theme)
  console.info(props)
  return (
    <MenuContainer>
      <div>{props.children}</div>
    </MenuContainer>
  )
}

export default Menu
