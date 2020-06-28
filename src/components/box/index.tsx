import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BlockBoxProps, getBlockBoxProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, getSizeProps } from '../../mixins/size'

export interface BoxProps {
  color: string
}

export const Box = styled.div<BoxProps & BlockBoxProps & SizeProps>`
  ${getBlockBoxProps}

  ${getSizeProps}
`
