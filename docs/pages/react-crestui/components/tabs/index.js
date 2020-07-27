import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import ReactSnippet from '@components/react-snippet'
import { Tabs, useTab, Box } from 'react-crestui'

const ReactCrestComponentTabs = () => {
  const tabState = useTab()
  const code = `
    <Tabs state={tabState}>
    </Tabs>
  `
  const scope = { Tabs, tabState }
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
