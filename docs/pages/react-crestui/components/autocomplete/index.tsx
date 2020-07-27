import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import ReactSnippet from '@components/react-snippet'
import { Autocomplete, useAutocomplete, Box } from 'react-crestui'
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
      <Box p={2}>
        <ReactSnippet code={code} scope={scope} />
      </Box>
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentAutocomplete
