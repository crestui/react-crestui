import { css } from 'styled-components'

export const getColor = (theme: any, colorKey: string): string => {
  if (colorKey in theme.colors) {
    return theme.colors[colorKey]
  } else {
    return colorKey
  }
}

export interface ColorProps {
  bg?: string
  color?: string
}

export const applyColorProps = css<ColorProps>`
  ${({ theme, color }) => color && 'color: ' + getColor(theme, color) + ';'}

  ${({ theme, bg }) => bg && 'background-color: ' + getColor(theme, bg) + ';'}
`
