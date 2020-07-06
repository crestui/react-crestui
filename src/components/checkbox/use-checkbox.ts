import { createContext, useState, useMemo } from 'react'

export interface CheckboxState {
  checked: boolean

  setChecked: Function

  toggleChecked: Function
}

export const CheckboxContext = createContext<CheckboxState>({
  checked: false,
  setChecked: () => {},
  toggleChecked: () => {}
})

export function useCheckbox(pChecked?: boolean): CheckboxState {
  const actualChecked =
    pChecked !== undefined && pChecked !== null ? pChecked : false
  const [checked, setChecked] = useState(actualChecked)
  const toggleChecked = () => {
    setChecked(!checked)
  }
  return useMemo(
    () => ({
      checked,
      setChecked,
      toggleChecked
    }),
    [checked, setChecked, toggleChecked]
  )
}
