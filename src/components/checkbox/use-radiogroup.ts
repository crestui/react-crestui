import { createContext, useState, useMemo } from 'react'
import nextId from 'react-id-generator'

export interface RadioGroupState {
  name: string

  setName: Function

  value: string

  setValue: Function
}

export const RadioGroupContext = createContext<RadioGroupState>({
  name: '',
  setName: () => {},
  value: '',
  setValue: () => {}
})

export function useRadioGroup(
  pValue?: string,
  pName?: string
): RadioGroupState {
  const actualName =
    pName !== undefined && pName !== null ? pName : nextId('rg-name-')
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
