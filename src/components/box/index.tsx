import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BlockBoxProps, getBlockBoxProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, getSizeProps } from '../../mixins/size'

export interface BoxProps {
  inline?: boolean
}

/**
 * A styled div with "box-sizing" set to "border-box".
 *
 * For more info,refer to :  https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
 */
export const Box = styled.div<BoxProps & BlockBoxProps & SizeProps>`
  box-sizing: border-box;
  display: ${(props) => (props.inline ? 'inline-block' : 'block')};

  ${getBlockBoxProps}

  ${getSizeProps}
`
