import React from 'react'
import styled from 'styled-components'
import { SizeProps, applySizeProps } from '../../mixins/size'
import { ColorProps, applyColorProps } from '../../mixins/color'
import { BorderProps, applyBorderProps } from '../../mixins/border'
import { applyHiddenInput } from '../../mixins/display'

const SelectContainer = styled.div`
  position: relative;

  ${applySizeProps}
  ${applyColorProps}
  ${applyBorderProps}
`

const OriginalSelect = styled.select`
  ${applyHiddenInput}
`

export type SelectProps = {
  label: string
}

export const Select = (props: SelectProps & SizeProps & ColorProps & BorderProps) => {
  console.info(`${props}`)
  return (
    <SelectContainer>
      <OriginalSelect></OriginalSelect>
    </SelectContainer>
  )
}

export default Select
