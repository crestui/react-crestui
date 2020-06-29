import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'

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
  inline?: boolean
}

/**
 *
 */
export const Menu = styled.div<MenuProps & SizeProps>`
  ${applySizeProps}
`

export default Menu
