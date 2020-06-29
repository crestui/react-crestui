import { useContext } from 'react'
import styled, { css } from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'
import { getColor } from '../../mixins/color'
import { ThemeContext } from '../../theming'

export interface ButtonProps {
  disabled?: boolean
  variant?: string
  color?: string
}

function getButtonCSS(props: ButtonProps) {
  const theme = useContext(ThemeContext)
  if (theme === null || theme === undefined) {
    throw new Error(`Set a default theme before proceeding`)
  }
  let fillColor = ''
  if (props.variant) {
    fillColor = getColor(theme, props.variant)
  }
  let color = 'white'
  if (props.color) {
    color = getColor(theme, props.color)
  }
  return css`
    background: ${fillColor};
    background-color: ${fillColor};
    border-color: ${fillColor};
    color: ${color};
    border-radius: ${theme.button.borderRadius};
  `
}

// eslint-disable-next-line no-empty-pattern
export const Button = styled.button<ButtonProps & BoxAlignProps & SizeProps>`
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

  ${(props) => getButtonCSS(props)}

  ${applyBoxAlignProps}

  ${applySizeProps}
`
