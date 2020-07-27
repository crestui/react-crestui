import React from 'react'
import ReactComponentsLayout from '@components/react-component-layout'
import ReactSnippet from '@components/react-snippet'
import { Flex } from 'react-crestui'

const ReactCrestComponentFlex = () => {
  const code = `
  <>
      <Flex justifyContent='center' alignItems={'center'} alignContent={'center'} style={{
                    backgroundColor: 'red'
                    }}>
                <div>Div 1</div>
                <div>Div 2</div>
            </Flex>
            <Flex w={'100%'} justifyContent='center' alignItems={'center'} alignContent={'center'}>
                <Flex style={{
                        backgroundColor: 'green'
                        }}>
                    <div>Green D1</div>
                    <div>Green D2</div>
                </Flex>
                <Flex flexGrow={1} style={{
                        backgroundColor: 'purple'
                        }}>
                    <div>Purple Div 3</div>
                    <div>Purple Div 4</div>
                </Flex>
            </Flex>
            <Flex w={'100%'} justifyContent='center' alignItems={'center'} alignContent={'center'}>
                <Flex flexGrow={1}  style={{
                        backgroundColor: 'green'
                        }}>
                    <div>Green D1</div>
                    <div>Green D2</div>
                </Flex>
                <Flex style={{
                        backgroundColor: 'purple'
                        }}>
                    <div>Purple D3</div>
                    <div>Purple D4</div>
                </Flex>
            </Flex>
    </>
  `
  const scope = { Flex }
  return (
    <ReactComponentsLayout title='Flex - Components - React CrestUI'>
      <h2>Flex</h2>
      <ReactSnippet code={code} scope={scope} />
    </ReactComponentsLayout>
  )
}

export default ReactCrestComponentFlex
