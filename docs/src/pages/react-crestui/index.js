import React from "react"
import ReactComponentsLayout from "@components/react-component-layout"
import { Text } from 'react-crestui'

const ReactCrestUIHome = () => (
  <ReactComponentsLayout title="Box - Components - React CrestUI">
      <h2>React CrestUI</h2>

      <Text>
      React CrestUI is a React component library written in typescript, compatible with React 16.8+ .
      </Text>

      <h3>Features</h3>
      <Text>

        The component library is written in typescript. Hence the package comes bundled with type definitions out of the box.
      </Text>

      <h3>Installation</h3>

`
$ npm install react-crestui
`


      <h3>Dependencies</h3>

The component library has the following `peerDependencies` as part of its project.

```
    "react": ">= 16.8.0",
    "react-dom": ">= 16.8.0",
    "react-icons": ">= 3.10.0",
    "react-id-generator": ">= 3.0.0",
    "react-is": ">= 16.8.0",
    "react-responsive": ">= 8.1.0",
    "styled-components": ">= 5.1.0",
    "use-onclickoutside": ">= 0.3.1"
```
  </ReactComponentsLayout>
)

export default ReactCrestUIHome
