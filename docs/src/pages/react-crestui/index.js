import React from "react"
import { Box } from 'react-crestui'
import StyledGatsbyLink from "../../components/link"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ReactCrestUIHome = () => (
  <Layout>
    <SEO title="Home" />
    <h2>React CrestUI</h2>
    <Box pl={'10%'}>
      <StyledGatsbyLink to="components">
        Components
      </StyledGatsbyLink>
    </Box>
  </Layout>
)

export default ReactCrestUIHome
