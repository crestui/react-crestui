import React from "react"
import { LiveProvider , LiveEditor, LiveError, LivePreview } from 'react-live'
import ComponentsSidebar from "../dropdown/node_modules/@components/sidebar"
import Layout from "../dropdown/node_modules/@components/layout"
import SEO from "../dropdown/node_modules/@components/seo"
import { Flex } from 'react-crestui'

const ReactCrestComponentFlex = () =>  {
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
      <Layout>
        <SEO title="Flex - Components - React CrestUI" />
        <ComponentsSidebar>
          <h2>Flex - Components - React CrestUI</h2>
          <LiveProvider code={code} scope={scope}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </ComponentsSidebar>
      </Layout>
  )
}

export default ReactCrestComponentFlex
