import styled from 'styled-components'
import { SizeProps, applySizeProps } from '../../mixins/size'
import { ColorProps, applyColorProps } from '../../mixins/color'
import { BorderProps, applyBorderProps } from '../../mixins/border'

export const Text = styled.span<SizeProps & ColorProps & BorderProps>`
  ${applySizeProps}

  ${applyColorProps}

  ${applyBorderProps}
`
