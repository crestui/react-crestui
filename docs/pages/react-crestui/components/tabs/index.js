import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import ReactSnippet from '@components/react-snippet'
import { Tabs, TabItem, useTab, Box } from 'react-crestui'

const ReactCrestComponentTabs = () => {
  const tabState = useTab()
  const code = `
      <Tabs state={tabState}>
        <TabItem title='Mercury' value='mercury'>
          Mercury is the fastest planet around the sun in the solar system
        </TabItem>
        <TabItem title='Venus' value='venus'>
          Venus is the planet second closest to the sun next to Mercury
        </TabItem>
        <TabItem title='Earth' value='earth'>
          Earth is the planet third closest to the sun
        </TabItem>
        <TabItem title='Mars' value='mars'>
          Mar is the planet fourth closest to the sun
        </TabItem>
        <TabItem title='Jupiter' value='jupiter'>
          Jupiter is the planet fifth closest to the sun
        </TabItem>
        <TabItem title='Saturn' value='saturn'>
          Saturn is the planet sixth closest to the sun
        </TabItem>
      </Tabs>
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
