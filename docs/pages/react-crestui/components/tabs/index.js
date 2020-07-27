import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import ReactSnippet from '@components/react-snippet'
import { Tabs, TabItem, useTab, Box } from 'react-crestui'

const ReactCrestComponentTabs = () => {
  const tabState = useTab()
  const code = `
    <>
      <div>
        Name: {tabState.name}
        Value: {tabState.value}
      </div>
      <Tabs state={tabState}>
        <TabItem title='Mercury' value='mercury'>
          Mercury is the fastest planet around the sun in the solar system
        </TabItem>
        <TabItem title='Venus' value='venus'>
          Venus is the planet second closest to the sun next to Mercury
        </TabItem>
      </Tabs>
    </>
  `
  const scope = { Tabs, TabItem, tabState }
  return (
    <ReactComponentsLayout title='Tabs - Components - React CrestUI'>
      <h2>Tabs</h2>
      <Box p={2}>
        <ReactSnippet code={code} scope={scope} />
      </Box>
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentTabs
