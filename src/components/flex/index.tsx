import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { FlexProps, applyFlexProps } from '../../mixins/flex'
// eslint-disable-next-line no-unused-vars
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'
// eslint-disable-next-line no-unused-vars
import { ColorProps, applyColorProps } from '../../mixins/color'
// eslint-disable-next-line no-unused-vars
import { BorderProps, applyBorderProps } from '../../mixins/border'
// eslint-disable-next-line no-unused-vars
import { PositionProps, applyPositionProps } from '../../mixins/position'

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
  LocalFlexProps &
    FlexProps &
    BoxAlignProps &
    SizeProps &
    ColorProps &
    BorderProps &
    PositionProps
>`

  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
  box-sizing: border-box;
  margin: 0;
  min-width: 0;

  ${applyFlexProps}

  ${applyBoxAlignProps}

  ${applySizeProps}

  ${applyColorProps}

  ${applyBorderProps}

  ${applyPositionProps}
`

export default Flex
