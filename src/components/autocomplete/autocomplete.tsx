import styled from 'styled-components'
import React from 'react'
import { AutocompleteState } from './use-autocomplete'

const AutocompleteContainer = styled.div`
  position: relative;
  overflow: hidden;
  tabindex: 0;
  width: 100%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12) 0 2px 2px rgba(0, 0, 0, 0.24);
`

const AutocompleteInput = styled.input.attrs(() => ({
  type: 'text'
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

  children: React.ReactNode
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
      />
      <AutocompleteSuggestions>
        <AutocompleteSuggestionItem>USA</AutocompleteSuggestionItem>
        <AutocompleteSuggestionItem>India</AutocompleteSuggestionItem>
        <AutocompleteSuggestionItem>Argentina</AutocompleteSuggestionItem>
      </AutocompleteSuggestions>
    </AutocompleteContainer>
  )
}
