import styled from 'styled-components'
import React from 'react'
import { AutocompleteState } from './use-autocomplete'

const AutocompleteContainer = styled.div`
  position: relative;
  overflow: hidden;
  tabindex: 0;
`

const AutocompleteInput = styled.input`
  position: absolute;
  background: transparent;
  border: 0;
  font-size: 5rem;
  color: white;
`

const AutocompleteSuggestions = styled.div`
  position: absolute;
  border-top: 2px solid #9999;
`

const AutocompleteSuggestionItem = styled.div`
  padding: 2rem;
  font-size: 20px;
  color: white;
  border-top: 1px solid #666;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`

export interface AutocompleteProps {
  state: AutocompleteState

  placeholder: string
}

const onChange = (state: AutocompleteState, value: string) => {
  state.setValue(value)
  return false
}

/**
 * Autocomplete component
 *
 *
 */
export const Autocomplete = (props: AutocompleteProps) => {
  console.info(`${JSON.stringify(props)}`)
  return (
    <AutocompleteContainer>
      <AutocompleteInput
        placeholder={props.placeholder}
        onChange={(e) => onChange(props.state, e.target.value)}
      ></AutocompleteInput>
      <AutocompleteSuggestions>
        <AutocompleteSuggestionItem>USA</AutocompleteSuggestionItem>
        <AutocompleteSuggestionItem>India</AutocompleteSuggestionItem>
        <AutocompleteSuggestionItem>Argentina</AutocompleteSuggestionItem>
      </AutocompleteSuggestions>
    </AutocompleteContainer>
  )
}
