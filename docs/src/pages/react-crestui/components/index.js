import React from "react"
import { Flex, Box, Text } from 'react-crestui'
import StyledGatsbyLink from "@components/link"
import Layout from "@components/layout"
import SEO from "@components/seo"

const ReactCrestUIComponentsHome = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Components - React CrestUI</h2>
    <Flex flexDirection='column'>
      <Box py={2}>
        <StyledGatsbyLink to="button">
          <Text>Button</Text>
        </StyledGatsbyLink>
      </Box>
      <Box py={2}>
        <StyledGatsbyLink to="flex">
          <Text>Flex</Text>
        </StyledGatsbyLink>
      </Box>
      <Box py={2}>
        <StyledGatsbyLink to="box">
          <Text>Box</Text>
        </StyledGatsbyLink>
      </Box>
    </Flex>
  </Layout>
)

export default ReactCrestUIComponentsHome
