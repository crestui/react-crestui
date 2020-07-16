import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps, getSize } from '../../mixins/size'
// eslint-disable-next-line no-unused-vars
import { ColorProps, applyColorProps, getColor } from '../../mixins/color'
// eslint-disable-next-line no-unused-vars
import { BorderProps, applyBorderProps } from '../../mixins/border'

export interface ButtonProps {
  disabled?: boolean
  variant?: string
  link?: boolean
}

/**
 * Button represents a component to display a "Button"
 */
// eslint-disable-next-line no-empty-pattern
export const Button = styled.button<
  ButtonProps & BoxAlignProps & SizeProps & ColorProps & BorderProps
>`
  display: inline-block;
  box-sizing: border-box;
  align-items: flex-start;
  cursor: pointer;
  text-transform: none;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-shadow: none;
  background: transparent;
  margin: 0;
  outline: none;
  border: none;

  ${({ link }) => link && 'border: none; '}


  ${({ theme, radius }) =>
    theme.button.borderRadius && radius === undefined && radius === null
      ? 'border-radius : ' + getSize(theme, theme.button.borderRadius) + ';'
      : ''}

  ${applyBoxAlignProps}

  ${applySizeProps}

  ${applyColorProps}

  ${applyBorderProps}

  &:focus {
    outline: 3px solid ${({ theme }) => getColor(theme, 'focus') + ';'}
    outline-offset: 0;
  }

  &:hover {
    outline: 1px solid ${({ theme }) => getColor(theme, 'focus') + ';'}
    outline-offset: 0;
  }
`
