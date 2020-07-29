import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Flex, Box, Dropdown, ThemeProvider,
    onAlignElementsBottom, MQProvider } from 'react-crestui'
import { AppTheme } from './example-theme'

const GlobalStyle = createGlobalStyle`
  body {
  }
`
const App = () => {
  return (
        <ThemeProvider theme={AppTheme}>
          <GlobalStyle />
          <MQProvider>
            <Box w={'100%'} p={1} style={{
                outline: 'none'
            }}>
                <Flex justifyContent='flex-start'>
                    <Dropdown event='focus' label='Products' size={'medium'}
                    onAlignElements={onAlignElementsBottom('left')}>
                        <Box bg='transparent' py={1} style={{

                        }}>
                            <Box bg='white' radius={0.5} bs={'solid'} bw={0.25} bc={'primary'} p={3}>
                                Some interesting content here
                            </Box>
                        </Box>
                    </Dropdown>
                </Flex>
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
                <input name='password'></input>
                <Flex flexDirection='column' justifyContent='center' h={'50vh'}>
                    <Box py={1}>Div 1</Box>
                    <Box py={1}>Div 2</Box>
                </Flex>
            </Box>
          </MQProvider>
        </ThemeProvider>
  )
}

export default App
