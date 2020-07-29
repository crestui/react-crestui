import styled from 'styled-components'
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
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
