import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import LiveCodeComponent from '@components/live-code'
import { Autocomplete, useAutocomplete } from 'react-crestui'

const ReactCrestComponentAutocomplete = () => {
  const autocompleteState = useAutocomplete()
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
