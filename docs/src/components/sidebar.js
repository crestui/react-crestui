import React from "react"
import { Flex, Box, Text } from 'react-crestui'
import StyledGatsbyLink from './link'

const ComponentsSidebar = ({ children }) => {
  return (
    <Flex flexDirection='row'>
      <Flex flexDirection='column' w={'20%'}>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/button">
            <Text>Button</Text>
          </StyledGatsbyLink>
        </Box>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/flex">
            <Text>Flex</Text>
          </StyledGatsbyLink>
        </Box>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/box">
            <Text>Box</Text>
          </StyledGatsbyLink>
        </Box>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/dropdown">
            <Text>Dropdown</Text>
          </StyledGatsbyLink>
        </Box>
      </Flex>
      <Box>
        { children }
      </Box>
    </Flex>
  )
}

export default ComponentsSidebar
