import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { FlexProps, applyFlexProps } from '../../mixins/flex'
// eslint-disable-next-line no-unused-vars
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'

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
  LocalFlexProps & FlexProps & BoxAlignProps & SizeProps
>`

  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};

  ${applyFlexProps}

  ${applyBoxAlignProps}

  ${applySizeProps}
`

export default Flex
