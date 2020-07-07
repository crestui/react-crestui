/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { Flex } from 'react-crestui'
import { DocsTheme } from './docs-theme'
import Header from "./header"
import { createGlobalStyle } from 'styled-components';
import "./layout.css"

const GlobalStyles = createGlobalStyle`
  body {
    font: 400 18px Rubik, sans-serif;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={DocsTheme}>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Flex flexDirection='column' p={5}>
        <main p={2}>{children}</main>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </Flex>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
