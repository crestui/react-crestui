import React, { createContext, useState, useMemo } from 'react'
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

export function useRadioGroup(
  pValue?: string,
  pName?: string
): RadioGroupState {
  const actualName =
    pName !== undefined && pName !== null ? pName : nextId('rg-name-')
  const actualValue = pValue !== undefined && pValue !== null ? pValue : ''
  const [name, setName] = useState(actualName)
  const [value, setValue] = useState(actualValue)
  return useMemo(
    () => ({
      name,
      setName,
      value,
      setValue
    }),
    [name, setName, value, setValue]
  )
}

export interface RadioGroupProps {
  children: React.ReactNode
  rgState: RadioGroupState
  direction?: string
}

export const RadioGroup = (props: RadioGroupProps) => {
  const direction =
    props.direction !== undefined && props.direction !== null
      ? props.direction
      : 'row'
  return (
    <RadioGroupContext.Provider value={props.rgState}>
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

export default RadioGroup
