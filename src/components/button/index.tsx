import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'

export interface ButtonProps {
  label: string
}

// eslint-disable-next-line no-empty-pattern
export const Button = styled.button<ButtonProps & BoxAlignProps & SizeProps>`
  box-sizing: border-box;

  ${applyBoxAlignProps}

  ${applySizeProps}
`
