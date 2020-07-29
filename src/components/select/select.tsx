import React from 'react'
import styled from 'styled-components'
import { SelectState, SelectItem } from './use-select'
import { SizeProps } from '../../mixins/size'
import { ColorProps, getColor } from '../../mixins/color'
import { BorderProps } from '../../mixins/border'

const SelectContainer = styled.nav`
  position: relative;
  user-select: none;
`

const ListRoot = styled.ul`
  position: relative;
  cursor: pointer;
  list-style: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`

const OptionElement = styled.li<{ selected: boolean }>`
  box-sizing: border-box;
  display: block;
  padding: 1rem;
  ${({ theme, selected }) =>
    selected && 'background-color: ' + getColor(theme, 'primary') + ';'}
  ${({ theme, selected }) =>
    selected && 'color: ' + getColor(theme, 'textprimary') + ';'}

  &:hover {
    ${({ theme }) => 'background-color: ' + getColor(theme, 'focus') + ';'}
    ${({ theme }) => 'color: ' + getColor(theme, 'textfocus') + ';'}
  }
`

type OptionProps = {
  item: SelectItem
  selected: boolean
}

const Option = (props: OptionProps) => {
  return <div>{props.item.label}</div>
}

export type SelectProps = {
  selectState: SelectState
}

export const Select = (
  props: SelectProps & SizeProps & ColorProps & BorderProps
) => {
  const options = props.selectState.items
  return (
    <SelectContainer>
      <ListRoot>
        {options.map((item: SelectItem, idx: number) => {
          return (
            <OptionElement
              key={idx}
              selected={item.value === props.selectState.selectedValue}
              onClick={() => {
                props.selectState.setSelectedValue(item.value)
              }}>
              <Option
                item={item}
                selected={item.value === props.selectState.selectedValue}
              />
            </OptionElement>
          )
        })}
      </ListRoot>
    </SelectContainer>
  )
}

export default Select
