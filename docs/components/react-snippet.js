import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const LiveCodeComponent = ({ code, scope }) => {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

export const ReactSnippet = ({ code, scope }) => {
  return <LiveCodeComponent code={code} scope={scope} />
}

export default ReactSnippet
