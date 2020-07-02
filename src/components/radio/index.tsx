import React, { createContext, useState, useContext } from 'react'
import styled from 'styled-components'
import { Label } from '../label'
import { Flex } from '../flex'
import { Box } from '../box'

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
      <Flex flexDirection='column'>{props.children}</Flex>
    </RadioGroupContext.Provider>
  )
}

const RadioSelectedIcon = () => {
  return `
    left: 6px;
    top: 2px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(0deg) scale(1);
  `
}

const RadioContent = styled.div<{ disabled?: boolean }>`
  position: absolute;
  vertical-align: text-top;
  display: inline-block;
  padding-left: 4rem;
  content: '';
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.primary}

  &::before {
    position: 'absolute';
    content: '';
    display: block;

    ${RadioSelectedIcon}
  }
`

const RadioInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  /* clip-path: polygon(0 0); */
  float: left;
  width: 2rem;
  /* height: 0; */

  &:checked ~ ${RadioContent} {
    opacity: 1;
  }

  &:checked ~ ${RadioContent}::after {
    display: block;
  }
`

export interface RadioProps {
  children: React.ReactNode
  id: string
  value: string
  disabled?: boolean
}

export const Radio = (props: RadioProps) => {
  const rgContext = useContext(RadioGroupContext)
  return (
    <Box>
      <Label
        pos='relative'
        htmlFor={props.id}
        style={{
          cursor: 'pointer'
        }}
      >
        <RadioInput
          id={props.id}
          checked={rgContext.value === props.value}
          onChange={(e) => {
            e.preventDefault()
            rgContext.setValue(props.value)
          }}
        />
        <RadioContent>{props.children}</RadioContent>
      </Label>
    </Box>
  )
}

export default Radio
