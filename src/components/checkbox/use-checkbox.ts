import { createContext, useState, useMemo, useCallback } from 'react'
import { SetFunc, EmptyFunc } from '../../mixins/common'

export interface CheckboxState {
  checked: boolean

  setChecked: SetFunc<boolean>

  toggleChecked: EmptyFunc
}

export const CheckboxContext = createContext<CheckboxState>({
  checked: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChecked: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleChecked: () => {},
})

export function useCheckbox(pChecked?: boolean): CheckboxState {
  const actualChecked =
    pChecked !== undefined && pChecked !== null ? pChecked : false
  const [checked, setChecked] = useState(actualChecked)
  const toggleChecked = useCallback(() => {
    setChecked(!checked)
  }, [checked, setChecked])
  return useMemo(
    () => ({
      checked,
      setChecked,
      toggleChecked,
    }),
    [checked, setChecked, toggleChecked]
  )
}
