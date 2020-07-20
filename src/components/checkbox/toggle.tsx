import React from 'react'
import styled from 'styled-components'
import nextId from 'react-id-generator'
import { CheckboxState } from './use-checkbox'
import { Label } from '../label'
import { applyHiddenInput } from '../../mixins/display'

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
  name: string
  checkboxState: CheckboxState
  disabled?: boolean
}

export const Toggle = (props: ToggleProps) => {
  const thisId = nextId('toggle-id-')
  return (
    <Label pos='relative' htmlFor={thisId} p={1}>
      <ToggleInput
        id={thisId}
        name={props.name}
        checked={props.checkboxState.checked}
        onChange={() => {
          props.checkboxState.toggleChecked()
        }}
      />
      <ToggleContent>{props.children}</ToggleContent>
    </Label>
  )
}

export default Toggle
