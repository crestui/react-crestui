import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import ReactSnippet from '@components/react-snippet'
import { MQProvider, Select, useSelect, SelectItem } from 'react-crestui'

const ReactCrestComponentSelect = () => {
  const items: Array<SelectItem> = []
  items.push({
    label: 'Apple',
    value: 'apple',
  })
  items.push({
    label: 'Orange',
    value: 'orange',
  })
  items.push({
    label: 'Banana',
    value: 'banana',
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
    <ReactComponentsLayout title='Select - Components - React CrestUI'>
      <h2>Select - Components - React CrestUI</h2>
      <ReactSnippet code={code} scope={scope} />
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentSelect
