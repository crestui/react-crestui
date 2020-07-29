import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { RawDropdown } from '../dropdown'
import { AutocompleteState } from './use-autocomplete'
import { useDisclosure } from '../../contexts/disclosure'

const AutocompleteContainer = styled.div`
  position: relative;
  overflow: hidden;
  tabindex: 0;
  width: 100%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12) 0 2px 2px rgba(0, 0, 0, 0.24);
`

const AutocompleteInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  border: none;
  outline: none;
  font-size: 1rem;
  color: #666;
  padding: 0.25rem;
  width: 100%;

  &:after {
    position: absolute;
    z-index: 10px;
    color: #aaa;
    cursor: pointer;
  }
`

const AutocompleteSuggestions = styled.div`
  width: 100%;
  z-index: 10;
  overflow: scroll;
  min-height: 20vh;
  max-height: 40vh;
  border-top: 2px solid #9999;
`

const AutocompleteSuggestionItem = styled.div`
  padding: 2rem;
  font-size: 20px;
  color: black;
  border-top: 1px solid #666;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #999;
  }
`

export interface AutocompleteProps {
  state: AutocompleteState

  placeholder: string
}

const onChange = (value: string) => {
  console.info(value)
  return true
}

const getPortalContent = (values: Array<string>, currentValue: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filteredValues = values.filter((value, _) => {
    if (currentValue.length === 0) {
      return true
    } else {
      return value.toLowerCase().indexOf(currentValue.toLowerCase()) !== -1
    }
  })
  return (
    <AutocompleteSuggestions>
      {filteredValues.map((value, index) => {
        return (
          <AutocompleteSuggestionItem key={index}>
            {value}
          </AutocompleteSuggestionItem>
        )
      })}
    </AutocompleteSuggestions>
  )
}

/**
 * Autocomplete component
 *
 *
 */
export const Autocomplete = (props: AutocompleteProps) => {
  const disclosure = useDisclosure(false)
  const [value, setValue] = useState('')
  const values = props.state.values
  const portalContent = useMemo(() => {
    return getPortalContent(values, value)
  }, [values, value])
  return (
    <RawDropdown disclosure={disclosure} portalContent={portalContent}>
      <AutocompleteContainer>
        <AutocompleteInput
          onClick={() => disclosure.toggleOpen()}
          placeholder={props.placeholder}
          value={value}
          onChange={(e) => {
            e.preventDefault()
            setValue(e.target.value)
            onChange(e.target.value)
          }}
        />
      </AutocompleteContainer>
    </RawDropdown>
  )
}
