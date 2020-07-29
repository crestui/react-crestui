import { createContext, useState, useMemo } from 'react'
import { SetFunc } from '../../mixins/common'
// import nextId from 'react-id-generator'

export type SelectItem = {
  value: string

  label: string

  disabled?: boolean
}

export interface SelectState {
  items: Array<SelectItem>

  setItems: SetFunc<Array<SelectItem>>

  selectedValue: string

  setSelectedValue: SetFunc<string>
}

export const SelectContext = createContext<SelectState>({
  items: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setItems: () => {},
  selectedValue: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSelectedValue: () => {},
})

export function useSelect(
  inputItems: Array<SelectItem>,
  inputSelectedValue: string
): SelectState {
  const [items, setItems] = useState(inputItems)
  const [selectedValue, setSelectedValue] = useState(inputSelectedValue)
  return useMemo(
    () => ({
      items,
      setItems,
      selectedValue,
      setSelectedValue,
    }),
    [items, selectedValue]
  )
}

export default useSelect
