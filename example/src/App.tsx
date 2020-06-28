import React from 'react'
import './index.css';
import { Menu, Flex, Box } from 'react-crestui'
import 'react-crestui/dist/index.css'

const App = () => {
  return (
    <>
        <Menu >
        </Menu>
        <div>
            Do something
        </div>
        <Flex w={'100%'} p={2}>
            <Box w={'100%'} justifyContent='center' alignItems={'center'} alignContent={'center'} style={{
                backgroundColor: 'red'
                }}>
                <div>Div 1</div>
                <div>Div 2</div>
            </Box>
        </Flex>
        <Flex flexDirection='column' justifyContent='space-around' h={'100vh'}>
            <div>Div 1</div>
            <div>Div 2</div>
        </Flex>
    </>
  )
}

export default App
