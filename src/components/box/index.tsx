import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BlockBoxProps, getBlockBoxProps } from '../../mixins/box'

export interface BoxProps {
  color: string
}

export const Box = styled.div<BoxProps & BlockBoxProps>`
  ${getBlockBoxProps}
`
