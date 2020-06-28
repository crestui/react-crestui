import React from 'react'
import './index.css';
import { Menu, Flex } from 'react-crestui'
import 'react-crestui/dist/index.css'

const App = () => {
  return (
    <>
        <Menu >
        </Menu>
        <div>
            Do something
        </div>
        <Flex w={1} justifyContent='center'>
            <div>Div 1</div>
            <div>Div 2</div>
        </Flex>
        <Flex flexDirection='column' justifyContent='space-around' h={'100vh'}>
            <div>Div 1</div>
            <div>Div 2</div>
        </Flex>
    </>
  )
}

export default App
