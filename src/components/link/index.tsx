import styled from 'styled-components'
import { SizeProps, applySizeProps } from '../../mixins/size'
import { ColorProps, applyColorProps } from '../../mixins/color'
import { BorderProps, applyBorderProps } from '../../mixins/border'

export const Link = styled.a<SizeProps & ColorProps & BorderProps>`
  text-decoration: none;

  ${applySizeProps}

  ${applyColorProps}

  ${applyBorderProps}
`
