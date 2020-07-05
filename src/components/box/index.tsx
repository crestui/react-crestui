import styled from 'styled-components'
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

export interface BoxProps {
  inline?: boolean
}

/**
 * A styled div with "box-sizing" set to "border-box".
 *
 * For more info,refer to :  https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
 */
export const Box = styled.div<
  BoxProps &
    BoxAlignProps &
    SizeProps &
    ColorProps &
    BorderProps &
    PositionProps
>`
  box-sizing: border-box;
  ${({ inline }) => inline && 'display: inline-block;'}
  margin: 0;
  min-width: 0;

  ${applyBoxAlignProps}

  ${applySizeProps}

  ${applyColorProps}

  ${applyBorderProps}

  ${applyPositionProps}
`
