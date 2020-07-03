import React, { useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { Flex, Box, Button, Dropdown, DropdownItem, Tooltip, useDisclosure,
    ArrowToTop, ArrowToRight, ArrowToLeft, ArrowToBottom, RadioGroup, Radio } from 'react-crestui'
import { AppTheme } from './theme'

const App = () => {
  const buttonRef = useRef(null)
  const disclosure = useDisclosure(false)
  return (
    <>
        <ThemeProvider theme={AppTheme}>
            <Box w={'100%'} p={1}>
                <Flex justifyContent='center' alignItems={'center'} alignContent={'center'} p={1}>
                    <Dropdown label='Products'>
                        <DropdownItem>Interesting Menu Item 1</DropdownItem>
                        <DropdownItem>Interesting Menu Item 2</DropdownItem>
                    </Dropdown>
                </Flex>
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
                    <Button bg='primary' p={1}>Signup</Button>
                    <Button bg='secondary' p={1}>Login</Button>
                </Box>
                <Box p={10}>
                    Some overflowing content
                </Box>
                <Flex justifyContent='center'>
                    <Button bg='primary' ref={buttonRef}
                    color='white'
                    onClick={() => { disclosure.toggleOpen() }}
                    px={7} py={2}>Click me</Button>
                    <Tooltip title='Tooltip title'
                        text='Interesting Tooltip' containerRef={buttonRef} disclosure={disclosure}
                        placement='bottom' alignment='right' />
                </Flex>
                <Flex my={2}>
                    <RadioGroup>
                        <Radio value='mercury'>
                            <Flex flexDirection='column'>
                                <div>Larger content</div>
                                <div>smaller content</div>
                            </Flex>
                        </Radio>
                        <Radio value='venus'>
                            <Flex flexDirection='column'>
                                <div>Venus is the second planet</div>
                                <div>Venus has a larger orbit</div>
                            </Flex>
                        </Radio>

                    </RadioGroup>
                </Flex>
                <Flex my={2}>
                    <RadioGroup direction='column'>
                        <Radio value='jupiter'>
                            <Flex flexDirection='column'>
                                <div>Jupiter is the largest planet</div>
                                <div>huge content</div>
                            </Flex>
                        </Radio>
                        <Radio value='saturn'>
                            <Flex flexDirection='column'>
                                <div>Saturn is the sixth planet</div>
                                <div>Saturn has a larger orbit</div>
                            </Flex>
                        </Radio>

                    </RadioGroup>
                </Flex>
                <Flex>
                    <Box pos='relative' px={1}>
                        ArrowToTop
                        <ArrowToTop thickness='10px' />
                    </Box>
                    <Box pos='relative' px={1}>
                        ArrowToBottom
                        <ArrowToBottom thickness='10px' />
                    </Box>
                    <Box pos='relative' px={1}>
                        ArrowToLeft
                        <ArrowToLeft thickness='10px' />
                    </Box>
                    <Box pos='relative' px={1}>
                        ArrowToRight
                        <ArrowToRight thickness='10px' top='100%' />
                    </Box>
                </Flex>
            </Box>
        </ThemeProvider>
    </>
  )
}

export default App
