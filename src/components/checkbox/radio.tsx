import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import nextId from 'react-id-generator'
import { RadioGroupContext } from './use-radiogroup'
import { Label } from '../label'
import { applyHiddenInput } from '../../mixins/display'

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

const RadioInput = styled.input.attrs({ type: 'radio' })`
  ${applyHiddenInput}


  &:checked ~ ${RadioContent}::before {
    ${(props) =>
      'background-color: ' + props.theme.colors.primary + ' !important;'}
  }

  &:focus ~ ${RadioContent}::before {
    ${(props) =>
      'box-shadow: 0 0 0 2px rgba(' + props.theme.colors.primary + ', 0.25);'};
  }

  &:hover ~ ${RadioContent}::before {
    ${(props) => 'box-shadow: 0 0 0 2px ' + props.theme.colors.primary + ';'};
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
  }, [rgContext.value, props.value, setChecked])
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
