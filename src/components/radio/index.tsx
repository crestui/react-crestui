import React, { createContext, useState, useContext } from 'react'

interface RadioGroupState {
  value: string

  setValue: Function
}

const RadioGroupContext = createContext<RadioGroupState>({
  value: '',
  setValue: () => {}
})

export interface RadioGroupProps {
  children: React.ReactNode
}

export const RadioGroup = (props: RadioGroupProps) => {
  const [value, setValue] = useState('')
  return (
    <RadioGroupContext.Provider value={{ value, setValue }}>
      {props.children}
    </RadioGroupContext.Provider>
  )
}

export interface RadioProps {
  label: string
}

export const Radio = (props: RadioProps) => {
  const ctx = useContext(RadioGroupContext)
  console.info(props)
  console.info(ctx)
  return null
}

export default Radio
