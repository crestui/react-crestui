import React from 'react'
import styled from 'styled-components'
import { SelectState, SelectItem } from './use-select'
import { SizeProps, applySizeProps } from '../../mixins/size'
import { ColorProps, applyColorProps } from '../../mixins/color'
import { BorderProps, applyBorderProps } from '../../mixins/border'

const SelectContainer = styled.div`
  position: relative;
  user-select: none;

  ${applySizeProps}
  ${applyColorProps}
  ${applyBorderProps}
`

const ListRoot = styled.ul`
  position: relative;
  cursor: pointer;
  list-style: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`

const OptionElement = styled.li`

`

type OptionProps = {
  item: SelectItem
  selectedValue: string
}

const Option = (props: OptionProps) => {
  return (
    <div>
      {props.item.value}
    </div>
  )
}


export type SelectProps = {
  selectState: SelectState
}

export const Select = (props: SelectProps & SizeProps & ColorProps & BorderProps) => {
  console.info(`${props}`)
  return (
    <SelectContainer>
      <ListRoot>
        {props.selectState.items.map((item: SelectItem, idx: number) => {
          return (
            <OptionElement key={idx}>
              <Option
                item={item}
                selectedValue={props.selectState.selectedValue}
              />
            </OptionElement>
          )
        })}
      </ListRoot>
    </SelectContainer>
  )
}

export default Select
