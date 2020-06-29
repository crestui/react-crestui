import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'

export interface DropdownProps {
  inline?: boolean
}

/**
 * "Flexbox is a one-dimensional layout method for laying out items in rows or columns.
 * Items flex to fill additional space and shrink to fit into smaller spaces. "
 *
 * Courtesy:  https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
 */
export const Dropdown = styled.div<DropdownProps & SizeProps>`
  ${applySizeProps}
`

export default Dropdown
