import styled from 'styled-components'
import { FlexProps, applyFlexProps } from '../../mixins/flex'
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
import { SizeProps, applySizeProps } from '../../mixins/size'
import { ColorProps, applyColorProps } from '../../mixins/color'
import { BorderProps, applyBorderProps } from '../../mixins/border'
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
