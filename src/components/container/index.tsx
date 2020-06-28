import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BlockBoxProps, getBlockBoxProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, getSizeProps } from '../../mixins/size'

export interface ContainerProps {
  color?: string
}

/**
 * A styled div with "box-sizing" set to "border-box" and display set to block
 *
 * For more info,refer to :  https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
 */
export const Container = styled.div<ContainerProps & BlockBoxProps & SizeProps>`
  box-sizing: border-box;
  display: block;

  ${getBlockBoxProps}

  ${getSizeProps}
`
