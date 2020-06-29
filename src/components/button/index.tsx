import { useContext } from 'react'
import styled, { css } from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'
import { getColor } from '../../mixins/color'
import { ThemeContext } from '../../contexts/themecontext'
import { DefaultTheme } from '../../theming'

const mergeOptions = require('merge-options')

export interface ButtonProps {
  disabled?: boolean
  variant?: string
  color?: string
}

function getButtonCSS(props: ButtonProps) {
  const theme = useContext(ThemeContext)
  let finalTheme = null
  if (theme === null || theme === undefined) {
    finalTheme = DefaultTheme
  } else {
    finalTheme = mergeOptions(theme, DefaultTheme)
  }
  let fillColor = ''
  if (props.variant) {
    fillColor = getColor(finalTheme, props.variant)
  }
  let color = 'white'
  if (props.color) {
    color = getColor(finalTheme, props.color)
  }
  return css`
    background: ${fillColor};
    background-color: ${fillColor};
    border-color: ${fillColor};
    color: ${color};
  `
}

// eslint-disable-next-line no-empty-pattern
export const Button = styled.button<ButtonProps & BoxAlignProps & SizeProps>`
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  text-transform: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-shadow: none;
  outline: 0;

  ${(props) => getButtonCSS(props)}

  ${applyBoxAlignProps}

  ${applySizeProps}
`
