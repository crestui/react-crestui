import { createContext, useState, useMemo } from 'react'
import { SetFunc } from '../../mixins/common'

export interface AutocompleteState {
  value: string

  setValue: SetFunc<string>
}

export const AutocompleteState = createContext<AutocompleteState>({
  value: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setValue: () => {}
})

export function useAutocomplete(): AutocompleteState {
  const [value, setValue] = useState('')
  return useMemo(
    () => ({
      value,
      setValue
    }),
    [value, setValue]
  )
}
