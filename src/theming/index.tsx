import React, { createContext, useMemo } from 'react'
import { DefaultTheme } from './default-theme'

const mergeOptions = require('merge-options')

export const ThemeContext = createContext<any>(DefaultTheme)

export function useTheme(theme: any): any {
  let finalTheme: any = null
  if (theme === null || theme === undefined) {
    finalTheme = DefaultTheme
  } else {
    console.info(`applying mergeOptions`)
    finalTheme = mergeOptions(DefaultTheme, theme)
  }
  return useMemo(() => finalTheme, [finalTheme])
}

type Props = {
  theme: any
  children: React.ReactNode
}

export const ThemeContextProvider = ({ theme, children }: Props) => {
  const newTheme = useTheme(theme)
  return (
    <ThemeContext.Provider value={newTheme}>{children}</ThemeContext.Provider>
  )
}
