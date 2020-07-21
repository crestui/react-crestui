import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import LiveCodeComponent from '@components/live-code'
import { MQProvider, Select, useSelect, SelectItem } from 'react-crestui'

const ReactCrestComponentSelect = () => {
  const items = new Array<SelectItem>({
      label: 'Apple',
      value: 'apple'
    },
    {
      label: 'Orange',
      value: 'orange'
    },
    {
      label: 'Banana',
      value: 'banana'
    })
  const selectState = useSelect(items, 'apple')
  const code = `
  <MQProvider>
    <Select selectState={selectState}>
    </Select>
  </MQProvider>
  `
  const scope = { Select, MQProvider, selectState }
  return (
    <ReactComponentsLayout title="Select - Components - React CrestUI">
      <h2>Select - Components - React CrestUI</h2>
      <LiveCodeComponent code={code} scope={scope} />
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentSelect
