import { createContext, useState, useMemo } from 'react'
import nextId from 'react-id-generator'

export interface TabState {
  name: string

  setName: Function

  value: string

  setValue: Function
}

export const TabContext = createContext<TabState>({
  name: '',
  setName: () => {},
  value: '',
  setValue: () => {}
})

export function useTab(pValue?: string, pName?: string): TabState {
  const actualName =
    pName !== undefined && pName !== null ? pName : nextId('tab-name-')
  const actualValue = pValue !== undefined && pValue !== null ? pValue : ''
  const [name, setName] = useState(actualName)
  const [value, setValue] = useState(actualValue)
  return useMemo(
    () => ({
      name,
      setName,
      value,
      setValue
    }),
    [name, setName, value, setValue]
  )
}

export default useTab
