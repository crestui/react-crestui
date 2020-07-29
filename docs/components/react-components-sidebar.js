import React from 'react'
import { Flex, Box, Text } from 'react-crestui'
import Link from 'next/link'

const ComponentsSidebar = ({ children }) => {
  return (
    <Flex flexDirection='row' h={'100vh'}>
      <Flex flexDirection='column' w={'20%'}>
        <Box py={2}>
          <Link href='/react-crestui/components/autocomplete'>
            <Text>Autocomplete</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/button'>
            <Text>Button</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/flex'>
            <Text>Flex</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/box'>
            <Text>Box</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/arrow'>
            <Text>Arrow</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/dropdown'>
            <Text>Dropdown</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/menu'>
            <Text>Menu</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/checkbox'>
            <Text>Checkbox</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/radio'>
            <Text>Radio</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/select'>
            <Text>Select</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/sidebar'>
            <Text>Sidebar</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/toggle'>
            <Text>Toggle</Text>
          </Link>
        </Box>
        <Box py={2}>
          <Link href='/react-crestui/components/tabs'>
            <Text>Tabs</Text>
          </Link>
        </Box>
      </Flex>
      <Box w='80%'>{children}</Box>
    </Flex>
  )
}

export default ComponentsSidebar
