import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'

export interface DropdownProps {
  inline?: boolean
}

/**
 *
 */
export const Dropdown = styled.div<DropdownProps & SizeProps>`
  ${applySizeProps}
`

export default Dropdown
