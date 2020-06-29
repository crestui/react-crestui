import React from 'react'
import './index.css';
import { Menu, Flex, Box, Button } from 'react-crestui'
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
            <Flex w={1} justifyContent='center' alignItems={'center'} alignContent={'center'}>
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
            <Flex w={1} justifyContent='center' alignItems={'center'} alignContent={'center'}>
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
            <Flex flexDirection='column' justifyContent='center' h={'50vh'}>
                <Box py={1}>Div 1</Box>
                <Box py={1}>Div 2</Box>
            </Flex>
            <Box>
                <Button variant='jam' p={1}>Signup</Button>
            </Box>
        </Box>
    </>
  )
}

export default App
