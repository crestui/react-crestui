import { createContext, useState, useMemo } from 'react'
import { SetFunc } from '../../mixins/common'

export interface AutocompleteState {
  values: Array<string>

  setValues: SetFunc<Array<string>>
}

export const AutocompleteState = createContext<AutocompleteState>({
  values: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setValues: () => {},
})

export function useAutocomplete(inputValues: Array<string>): AutocompleteState {
  const [values, setValues] = useState<Array<string>>(inputValues)
  return useMemo(
    () => ({
      values,
      setValues,
    }),
    [values, setValues]
  )
}
