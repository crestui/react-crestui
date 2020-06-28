import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { FlexProps, getFlexProps } from '../../mixins/flex'
// eslint-disable-next-line no-unused-vars
import { BlockBoxProps, getBlockBoxProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, getSizeProps } from '../../mixins/size'

export interface LocalFlexProps {
  inline?: boolean
}

/**
 * "Flexbox is a one-dimensional layout method for laying out items in rows or columns.
 * Items flex to fill additional space and shrink to fit into smaller spaces. "
 *
 * Courtesy:  https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
 */
export const Flex = styled.div<
  LocalFlexProps & FlexProps & BlockBoxProps & SizeProps
>`

  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};

  ${getFlexProps}

  ${getBlockBoxProps}

  ${getSizeProps}
`

export default Flex
