import React, { createContext, useMemo, useState } from 'react'

export interface IPalette {
  name: string

  setName: Function
}

export const PaletteContext = createContext<IPalette>({
  name: '',
  setName: () => {}
})

export function usePalette(paletteName: string): IPalette {
  const [name, setName] = useState(paletteName)
  return useMemo(
    () => ({
      name,
      setName
    }),
    [name, setName]
  )
}

type Props = {
  children: React.ReactNode
}

export const PaletteProvider = ({ children }: Props) => {
  const paletteState = usePalette('light')
  return (
    <PaletteContext.Provider value={paletteState}>
      {children}
    </PaletteContext.Provider>
  )
}
