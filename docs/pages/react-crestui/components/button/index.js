import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import ReactSnippet from '@components/react-snippet'
import { Button } from 'react-crestui'

const ReactCrestComponentButton = () => {
  const code = `
    <Button>
    Signup
    </Button>
  `
  const scope = { Button }
  return (
    <ReactComponentsLayout title='Button - Components - React CrestUI'>
      <h2>Button</h2>
      <ReactSnippet code={code} scope={scope} />
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentButton
