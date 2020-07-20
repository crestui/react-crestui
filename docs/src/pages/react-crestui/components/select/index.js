import React from "react"
import ReactComponentsLayout from "@components/react-component-layout"
import LiveCodeComponent from "@components/live-code"
import { MQProvider, Select, onAlignElementsBottom } from "react-crestui"

const ReactCrestComponentSelect = () =>  {
  const code = `
  <MQProvider>
    <Select>
    </Select>
  </MQProvider>
  `
  const scope = { Select, MQProvider, onAlignElementsBottom }
  return (
    <ReactComponentsLayout title="Select - Components - React CrestUI">
      <h2>Select - Components - React CrestUI</h2>
      <LiveCodeComponent code={code} scope={scope} />
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentSelect
