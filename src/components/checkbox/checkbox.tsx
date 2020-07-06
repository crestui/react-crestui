import React, { useState } from 'react'
import styled from 'styled-components'
import { applyHiddenInput } from './mixins'
import nextId from 'react-id-generator'
import { Label } from '../label'

const CheckboxContent = styled.div<{ disabled?: boolean }>`
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

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  ${applyHiddenInput}


  &:checked ~ ${CheckboxContent}::before {
    ${(props) =>
      'background-color: ' + props.theme.colors.primary + ' !important;'}
  }

  &:focus ~ ${CheckboxContent}::before {
    ${(props) =>
      'box-shadow: 0 0 0 2px rgba(' + props.theme.colors.primary + ', 0.25);'};
  }

  &:hover ~ ${CheckboxContent}::before {
    ${(props) => 'box-shadow: 0 0 0 2px ' + props.theme.colors.primary + ';'};
  }
`

export interface CheckboxProps {
  children: React.ReactNode
  value: boolean
  name: string
  disabled?: boolean
}

export const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(props.value)
  const thisId = nextId()
  return (
    <Label pos='relative' htmlFor={thisId} p={1}>
      <CheckboxInput
        id={thisId}
        name={props.name}
        checked={checked}
        onChange={() => {
          setChecked(props.value)
        }}
      />
      <CheckboxContent>{props.children}</CheckboxContent>
    </Label>
  )
}

export default Checkbox
