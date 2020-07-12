import { useState, useMemo, useCallback } from 'react'

export interface IDisclosure {
  isOpen: boolean

  setIsOpen: Function

  toggleOpen: Function
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
      toggleOpen
    }),
    [isOpen, setIsOpen, toggleOpen]
  )
}

export default IDisclosure
