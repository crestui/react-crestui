import styled from 'styled-components'
import { BlockBoxProps, getBlockBoxProps } from '../box'

export interface FlexProps {
  flexDirection?: string
  flexWrap?: boolean
}

export const Flex = styled.div<FlexProps & BlockBoxProps>`
  display: flex;

  ${({ flexDirection }) =>
    flexDirection && 'flex-direction: ' + flexDirection + ';'}

  ${({ flexWrap }) => flexWrap && 'flex-wrap: ' + flexWrap + ';'}

  ${getBlockBoxProps}
`

export default Flex
