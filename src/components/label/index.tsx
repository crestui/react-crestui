import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'
// eslint-disable-next-line no-unused-vars
import { ColorProps, applyColorProps } from '../../mixins/color'

export const Label = styled.label<SizeProps & ColorProps>`
  ${applySizeProps}

  ${applyColorProps}
`