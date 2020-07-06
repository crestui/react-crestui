import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { applyHiddenInput } from './mixins'
import nextId from 'react-id-generator'
import { Label } from '../label'
import { RadioGroupContext } from './radiogroup'

const ToggleContent = styled.div<{ disabled?: boolean }>`
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

const ToggleInput = styled.input.attrs({ type: 'radio' })`
  ${applyHiddenInput}


  &:checked ~ ${ToggleContent}::before {
    ${(props) =>
      'background-color: ' + props.theme.colors.primary + ' !important;'}
  }

  &:focus ~ ${ToggleContent}::before {
    ${(props) =>
      'box-shadow: 0 0 0 2px rgba(' + props.theme.colors.primary + ', 0.25);'};
  }

  &:hover ~ ${ToggleContent}::before {
    ${(props) => 'box-shadow: 0 0 0 2px ' + props.theme.colors.primary + ';'};
  }
`

export interface ToggleProps {
  children: React.ReactNode
  value: string
  disabled?: boolean
}

export const Toggle = (props: ToggleProps) => {
  const rgContext = useContext(RadioGroupContext)
  const [checked, setChecked] = useState(rgContext.value === props.value)
  useEffect(() => {
    setChecked(rgContext.value === props.value)
  }, [rgContext.value])
  const thisId = nextId()
  return (
    <Label pos='relative' htmlFor={thisId} p={1}>
      <ToggleInput
        id={thisId}
        name={rgContext.name}
        checked={checked}
        onChange={() => {
          rgContext.setValue(props.value)
        }}
      />
      <ToggleContent>{props.children}</ToggleContent>
    </Label>
  )
}

export default Toggle
