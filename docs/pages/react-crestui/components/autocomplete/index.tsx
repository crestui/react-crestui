import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import LiveCodeComponent from '@components/live-code'
import { Autocomplete, useAutocomplete, Flex, Box } from 'react-crestui'

const ReactCrestComponentAutocomplete = () => {
  const autocompleteState = useAutocomplete()
  const code = `
    <Autocomplete state={autocompleteState}
    placeholder='Enter information'>
    </Autocomplete>
  `
  const scope = { Autocomplete, autocompleteState }
  return (
    <ReactComponentsLayout title='Autocomplete - Components - React CrestUI'>
      <Flex flexDirection='column'>
        <Box w='100%'>
          <h2>Autocomplete - Components - React CrestUI</h2>
          <LiveCodeComponent code={code} scope={scope} />
          <Autocomplete
            state={autocompleteState}
            placeholder='Enter information'>
          </Autocomplete>
        </Box>
      </Flex>
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentAutocomplete
