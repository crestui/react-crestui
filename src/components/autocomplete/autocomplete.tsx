import styled from 'styled-components'

import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
import { SizeProps, applySizeProps } from '../../mixins/size'
import { ColorProps, applyColorProps } from '../../mixins/color'
import { BorderProps, applyBorderProps } from '../../mixins/border'
import { PositionProps, applyPositionProps } from '../../mixins/position'

export interface AutocompleteProps {
  inline?: boolean
}

/**
 * A styled div with "box-sizing" set to "border-box".
 *
 * For more info,refer to :  https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
 */
export const Autocomplete = styled.div<
AutocompleteProps &
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
