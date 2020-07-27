import { createContext, useState, useMemo } from 'react'
import { SetFunc } from '../../mixins/common'
import nextId from 'react-id-generator'

export interface RadioGroupState {
  name: string

  setName: SetFunc<string>

  value: string

  setValue: SetFunc<string>
}

export const RadioGroupContext = createContext<RadioGroupState>({
  name: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setName: () => {},
  value: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setValue: () => {},
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
      setValue,
    }),
    [name, setName, value, setValue]
  )
}
