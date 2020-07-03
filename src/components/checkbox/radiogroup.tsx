import React, { createContext, useState } from 'react'
import { Flex } from '../flex'
import nextId from 'react-id-generator'

interface RadioGroupState {
  name: string

  setName: Function

  value: string

  setValue: Function
}

export const RadioGroupContext = createContext<RadioGroupState>({
  name: '',
  setName: () => {},
  value: '',
  setValue: () => {}
})

export interface RadioGroupProps {
  children: React.ReactNode
  name?: string
  selectedValue?: string
  direction?: string
}

export const RadioGroup = (props: RadioGroupProps) => {
  const selectedValue = props.selectedValue ? props.selectedValue : ''
  const direction = props.direction ? props.direction : 'row'
  const [value, setValue] = useState(selectedValue)
  const givenName = props.name ? props.name : nextId('rg-name-')
  const [name, setName] = useState(givenName)
  return (
    <RadioGroupContext.Provider value={{ name, setName, value, setValue }}>
      <Flex
        flexDirection={direction}
        style={{
          verticalAlign: 'middle'
        }}
      >
        {props.children}
      </Flex>
    </RadioGroupContext.Provider>
  )
}
