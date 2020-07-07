import React from "react"
import { Box } from 'react-crestui'
import StyledGatsbyLink from "@components/link"
import Layout from "@components/layout"
import SEO from "@components/seo"

const ReactCrestUIComponentsHome = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Components - React CrestUI</h2>
    <Box pl={'10%'}>
      <StyledGatsbyLink to="button">
        Button
      </StyledGatsbyLink>
      <StyledGatsbyLink to="flex">
        Flex
      </StyledGatsbyLink>
    </Box>
  </Layout>
)

export default ReactCrestUIComponentsHome
