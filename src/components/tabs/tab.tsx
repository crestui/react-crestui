import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'
// eslint-disable-next-line no-unused-vars
import { ColorProps, applyColorProps } from '../../mixins/color'
// eslint-disable-next-line no-unused-vars
import { BorderProps, applyBorderProps } from '../../mixins/border'

export const Tabs = styled.span<SizeProps & ColorProps & BorderProps>`
  ${applySizeProps}

  ${applyColorProps}

  ${applyBorderProps}
`
