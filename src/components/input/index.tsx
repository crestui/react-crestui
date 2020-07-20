import styled from 'styled-components'
import { SizeProps, applySizeProps } from '../../mixins/size'
import { ColorProps, applyColorProps } from '../../mixins/color'
import { BorderProps, applyBorderProps } from '../../mixins/border'
import { PositionProps, applyPositionProps } from '../../mixins/position'

export const Input = styled.input<SizeProps & ColorProps & BorderProps & PositionProps>`
  ${applySizeProps}

  ${applyColorProps}

  ${applyBorderProps}

  ${applyPositionProps}

`
