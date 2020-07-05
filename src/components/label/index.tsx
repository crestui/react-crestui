import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'
// eslint-disable-next-line no-unused-vars
import { ColorProps, applyColorProps } from '../../mixins/color'
// eslint-disable-next-line no-unused-vars
import { BorderProps, applyBorderProps } from '../../mixins/border'
// eslint-disable-next-line no-unused-vars
import { PositionProps, applyPositionProps } from '../../mixins/position'

export const Label = styled.label<
  SizeProps & ColorProps & BorderProps & PositionProps
>`
  ${applySizeProps}

  ${applyColorProps}

  ${applyBorderProps}

  ${applyPositionProps}

`
