import React from "react"
import { Flex, Box, Text } from 'react-crestui'
import StyledGatsbyLink from './link'

const ComponentsSidebar = ({ children }) => {
  return (
    <Flex flexDirection='row' h={'90vh'}>
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
          <StyledGatsbyLink to="/react-crestui/components/arrow">
            <Text>Arrow</Text>
          </StyledGatsbyLink>
        </Box>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/dropdown">
            <Text>Dropdown</Text>
          </StyledGatsbyLink>
        </Box>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/menu">
            <Text>Menu</Text>
          </StyledGatsbyLink>
        </Box>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/checkbox">
            <Text>Checkbox</Text>
          </StyledGatsbyLink>
        </Box>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/radio">
            <Text>Radio</Text>
          </StyledGatsbyLink>
        </Box>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/sidebar">
            <Text>Sidebar</Text>
          </StyledGatsbyLink>
        </Box>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/toggle">
            <Text>Toggle</Text>
          </StyledGatsbyLink>
        </Box>
        <Box py={2}>
          <StyledGatsbyLink to="/react-crestui/components/tabs">
            <Text>Tabs</Text>
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
