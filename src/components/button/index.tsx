import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'
// eslint-disable-next-line no-unused-vars
import { ColorProps, applyColorProps } from '../../mixins/color'

export interface ButtonProps {
  disabled?: boolean
  variant?: string
  radius?: string
}

/**
 * Button represents a component to display a "Button"
 */
// eslint-disable-next-line no-empty-pattern
export const Button = styled.button<
  ButtonProps & BoxAlignProps & SizeProps & ColorProps
>`
  display: block;
  box-sizing: border-box;
  align-items: flex-start;
  cursor: pointer;
  text-transform: none;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-shadow: none;
  margin: 0px;
  outline: 0;

  ${(props) =>
    props.theme.button.borderRadius
      ? 'border-radius : ' + props.theme.button.borderRadius + ';'
      : ''}
  ${(props) =>
    props.radius ? 'border-radius : ' + props.radius + ' !important;' : ''}

  ${applyBoxAlignProps}

  ${applySizeProps}

  ${applyColorProps}
`
