import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { FlexProps, getFlexProps } from '../../mixins/flex'
// eslint-disable-next-line no-unused-vars
import { BlockBoxProps, getBlockBoxProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, getSizeProps } from '../../mixins/size'

export const Flex = styled.div<FlexProps & BlockBoxProps & SizeProps>`
  display: flex;

  ${getFlexProps}

  ${getBlockBoxProps}

  ${getSizeProps}
`

export default Flex
