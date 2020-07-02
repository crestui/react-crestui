import React, { createContext, useState, useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from '../flex'
import { Label } from '../label'
import nextId from 'react-id-generator'

interface RadioGroupState {
  name: string

  setName: Function

  value: string

  setValue: Function
}

const RadioGroupContext = createContext<RadioGroupState>({
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

const RadioContent = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  padding-left: 2rem;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 1rem;
    height: 1rem;
    content: '';
    display: inline-block;
    vertical-align: middle;
    ${(props) => 'border: 2px solid ' + props.theme.colors.primary + ';'}
    border-radius: 50%;
    cursor: pointer;
    transform: translateY(50%);
  }
`

export const applyHiddenInput = css`
  position: absolute;
  box-sizing: border-box;
  clip-path: polygon(0 0);
  float: left;
  width: 1px;
  height: 1px;
  border: 0;
  margin: -1px;
  padding: 0;
  overflow: hidden;
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  ${applyHiddenInput}


  &:checked ~ ${RadioContent}::before {
    ${(props) =>
      'background-color: ' + props.theme.colors.primary + ' !important;'}
  }
`

export interface RadioProps {
  children: React.ReactNode
  value: string
  disabled?: boolean
}

export const Radio = (props: RadioProps) => {
  const rgContext = useContext(RadioGroupContext)
  const [checked, setChecked] = useState(rgContext.value === props.value)
  useEffect(() => {
    setChecked(rgContext.value === props.value)
  }, [rgContext.value])
  const thisId = nextId()
  return (
    <Label pos='relative' htmlFor={thisId} p={1}>
      <RadioInput
        id={thisId}
        name={rgContext.name}
        checked={checked}
        onChange={() => {
          rgContext.setValue(props.value)
        }}
      />
      <RadioContent>{props.children}</RadioContent>
    </Label>
  )
}

export default Radio
