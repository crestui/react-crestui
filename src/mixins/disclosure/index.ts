import { useState, useMemo } from 'react'

export interface IDisclosure {
  isOpen: boolean

  setIsOpen: Function

  toggleOpen: Function
}

export function useDisclosure(open: boolean): IDisclosure {
  const [isOpen, setIsOpen] = useState(open)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return useMemo(
    () => ({
      isOpen,
      setIsOpen,
      toggleOpen
    }),
    [isOpen]
  )
}
