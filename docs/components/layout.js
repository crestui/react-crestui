/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider, Flex, getColor } from 'react-crestui'
import { DocsTheme } from './docs-theme'
import Header from './header'

const GlobalStyles = createGlobalStyle`
  body {
    font: 400 18px Rubik, sans-serif;
    ${({ theme }) => 'color: ' + getColor(theme, 'text') + ';'}

    ${({ theme }) => 'background-color: ' + getColor(theme, 'bg') + ';'}

  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={DocsTheme}>
      <GlobalStyles />
      <Header siteTitle='Interesting title' />
      <Flex flexDirection='column' p={5}>
        <main p={2}>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </Flex>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
