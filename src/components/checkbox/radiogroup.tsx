import React from 'react'
import { Flex } from '../flex'
import { RadioGroupContext, RadioGroupState } from './use-radiogroup'

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
          verticalAlign: 'middle',
        }}>
        {props.children}
      </Flex>
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
