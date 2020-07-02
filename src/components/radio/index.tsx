import React, { createContext, useState, useContext } from 'react'
import styled from 'styled-components'
import { Label } from '../label'

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

const RadioSelectedIcon = () => {
  return `
    left: 6px;
    top: 2px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(50deg);
  `
}

const RadioContent = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #ddd;
  transition: all 0.3s background-color;

  &::after {
    content: '';
    position: 'absolute';
    display: none;

    ${RadioSelectedIcon}
  }
`

const RadioInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked ~ ${RadioContent} {
    opacity: 1;
  }

  &:checked ~ ${RadioContent}::after {
    display: block;
  }
`

export interface RadioProps {
  children: React.ReactNode
  value: string
  disabled?: boolean
}

export const Radio = (props: RadioProps) => {
  const rgContext = useContext(RadioGroupContext)
  return (
    <Label
      pos='relative'
      style={{
        cursor: 'pointer',
        paddingLeft: '4rem'
      }}
    >
      <RadioInput
        checked={rgContext.value === props.value}
        onChange={(e) => {
          e.preventDefault()
          rgContext.setValue(props.value)
        }}
      />
      <RadioContent>{props.children}</RadioContent>
    </Label>
  )
}

export default Radio
