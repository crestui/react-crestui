import React from "react"
import ReactComponentsLayout from "@components/react-component-layout"
import LiveCodeComponent from "@components/live-code"
import { MQProvider, Dropdown, Box, onAlignElementsBottom } from 'react-crestui'

const ReactCrestComponentSelect = () =>  {
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
    <ReactComponentsLayout title="Select - Components - React CrestUI">
      <h2>Select - Components - React CrestUI</h2>
      <LiveCodeComponent code={code} scope={scope} />
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentSelect
