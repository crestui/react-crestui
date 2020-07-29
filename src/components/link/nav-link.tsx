import styled from 'styled-components'
import { PlainLink } from './plain-link'
import { getColor } from '../../mixins/color'

export const NavLink = styled(PlainLink)`
  box-shadow: none;
  text-decoration: none;
  ${({ theme }) => 'color: ' + getColor(theme, 'text') + ';'}
  padding-bottom: 1rem;

  &:hover {
    ${({ theme }) => 'border-bottom-color: ' + getColor(theme, 'focus') + ';'}
    border-style: none none solid none;
    border-width: none none 2px none;
  }
`

export default NavLink
