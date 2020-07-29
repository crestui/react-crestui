import { useState, useMemo, useCallback } from 'react'
import { EmptyFunc, SetFunc } from '../../mixins/common'

export interface IDisclosure {
  isOpen: boolean

  setIsOpen: SetFunc<boolean>

  toggleOpen: EmptyFunc
}

export function useDisclosure(open: boolean): IDisclosure {
  const [isOpen, setIsOpen] = useState(open)
  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])
  return useMemo(
    () => ({
      isOpen,
      setIsOpen,
      toggleOpen,
    }),
    [isOpen, setIsOpen, toggleOpen]
  )
}

export default IDisclosure
