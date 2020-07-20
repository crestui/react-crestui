import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { DefaultTheme } from './default-theme'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mergeOptions = require('merge-options')

type ThemeProviderProps = {
  theme?: any
  children: React.ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const finalTheme = props.theme
    ? mergeOptions(DefaultTheme, props.theme)
    : DefaultTheme
  return (
    <StyledThemeProvider theme={finalTheme}>
      {props.children}
    </StyledThemeProvider>
  )
}
