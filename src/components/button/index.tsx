import { useContext } from 'react'
import styled, { css } from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'
// eslint-disable-next-line no-unused-vars
import { ColorProps, applyColorProps } from '../../mixins/color'
import { ThemeContext } from '../../theming'

export function getButtonCSS() {
  const theme = useContext(ThemeContext)
  if (theme === null || theme === undefined) {
    throw new Error(`Set a default theme before proceeding`)
  }
  return css`
    border-radius: ${theme.button.borderRadius};
  `
}

export interface ButtonProps {
  disabled?: boolean
}

/**
 * Button represents a component to display a "Button"
 */
// eslint-disable-next-line no-empty-pattern
export const Button = styled.button<
  ButtonProps & BoxAlignProps & SizeProps & ColorProps
>`
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  text-transform: none;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-shadow: none;
  margin: 0px;
  outline: 0;
  position: relative;

  ${applyBoxAlignProps}

  ${applySizeProps}

  ${applyColorProps}
`
