import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import LiveCodeComponent from '@components/live-code'
import { Autocomplete, useAutocomplete } from 'react-crestui'
import { states } from '@components/states-hash'

const ReactCrestComponentAutocomplete = () => {
  const titles = states.map((value, _) => {
    return value.name
  })
  const autocompleteState = useAutocomplete(titles)
  const code = `
    <Autocomplete state={autocompleteState}
    placeholder='Enter country'>
    </Autocomplete>
  `
  const scope = { Autocomplete, autocompleteState }
  return (
    <ReactComponentsLayout title='Autocomplete - Components - React CrestUI'>
      <h2>Autocomplete - Components - React CrestUI</h2>
      <LiveCodeComponent code={code} scope={scope} />
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentAutocomplete
