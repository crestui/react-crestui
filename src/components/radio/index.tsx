import React, { createContext, useState, useContext } from 'react'
import styled from 'styled-components'

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
  selectedValue?: string
}

export const RadioGroup = (props: RadioGroupProps) => {
  const selectedValue = props.selectedValue ? props.selectedValue : ''
  const [value, setValue] = useState(selectedValue)
  return (
    <RadioGroupContext.Provider value={{ value, setValue }}>
      {props.children}
    </RadioGroupContext.Provider>
  )
}

const RadioContainer = styled.div<{ checked: boolean; disabled?: boolean }>``

export interface RadioProps {
  children: React.ReactNode
  value: string
  disabled?: boolean
}

export const Radio = (props: RadioProps) => {
  const rgContext = useContext(RadioGroupContext)
  return (
    <RadioContainer
      checked={rgContext.value === props.value}
      disabled={props.disabled}
      onClick={() => rgContext.setValue(props.value)}
    >
      {props.children}
    </RadioContainer>
  )
}

export default Radio
