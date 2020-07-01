import { useContext } from 'react'
import { ThemeContext, css } from 'styled-components'

export function getColor(colorKey: string): string {
  const theme = useContext(ThemeContext)
  if (theme === null || theme === undefined) {
    throw new Error(
      'Set a default theme using ThemeContextProvider before proceeding'
    )
  }
  // eslint-disable-next-line no-prototype-builtins
  if (theme.colors.hasOwnProperty(colorKey)) {
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
  ${({ color }) => color && 'color: ' + getColor(color) + ';'}

  ${({ bg }) => bg && 'background-color: ' + getColor(bg) + ';'}
`
