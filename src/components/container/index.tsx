import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'

export interface ContainerProps {
  color?: string
}

/**
 *
 */
export const Container = styled.div<ContainerProps & BoxAlignProps & SizeProps>`
  box-sizing: border-box;
  display: block;

  ${applyBoxAlignProps}

  ${applySizeProps}
`
