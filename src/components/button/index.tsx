import styled, { css } from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { BoxAlignProps, applyBoxAlignProps } from '../../mixins/box'
// eslint-disable-next-line no-unused-vars
import { SizeProps, applySizeProps } from '../../mixins/size'

export interface ButtonProps {
  disabled?: boolean
}

function getDisabledButton() {
  return css`
    background: rgb(125, 76, 219);
    background-color: transparent;
    border-color: rgb(125, 76, 219);
  `
}

function getNormalButton() {
  return css`
    background: rgb(125, 76, 219);
    background-color: transparent;
    border-color: rgb(125, 76, 219);
  `
}
function getButtonCSS(props: ButtonProps) {
  if (props.disabled) {
    return getDisabledButton()
  } else {
    return getNormalButton()
  }
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
