import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import ReactSnippet from '@components/react-snippet'
import { MQProvider, Dropdown, Box, onAlignElementsBottom } from 'react-crestui'

const ReactCrestComponentDropdown = () => {
  const code = `
  <MQProvider>
    <Dropdown event='focus' label='Products' size={'medium'}
        onAlignElements={onAlignElementsBottom('left')}>
        <Box bg='transparent' py={1}>
          <Box bg='white' radius={0.5} bs={'solid'} bw={0.25} bc={'primary'} p={3}>
              Some interesting content here
          </Box>
        </Box>
    </Dropdown>
  </MQProvider>
  `
  const scope = { Dropdown, Box, MQProvider, onAlignElementsBottom }
  return (
    <ReactComponentsLayout title='Dropdown - Components - React CrestUI'>
      <h2>Dropdown - Components - React CrestUI</h2>
      <ReactSnippet code={code} scope={scope} />
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentDropdown
