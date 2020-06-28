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
        <Box w={1} p={1}>
            <Flex justifyContent='center' alignItems={'center'} alignContent={'center'} style={{
                    backgroundColor: 'red'
                    }}>
                <div>Div 1</div>
                <div>Div 2</div>
            </Flex>
            <Flex flexDirection='column' justifyContent='center' h={'50vh'}>
                <Box py={1}>Div 1</Box>
                <Box py={1}>Div 2</Box>
            </Flex>
        </Box>
    </>
  )
}

export default App
