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

/**
 * Determines if we are running on server or in client.
 * @return {boolean} true if running on server
 */
function getIsServerRendered() {
  return typeof window === 'undefined'
}

const Layout = ({ children }) => {
  // Accessibility tool - outputs to devtools console on dev only and client-side only.
  // @see https://github.com/dequelabs/react-axe
  if (process.env.NODE_ENV !== 'production' && !getIsServerRendered()) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const ReactDOM = require('react-dom')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axe = require('react-axe')
    axe(React, ReactDOM, 1000)
  }
  return (
    <ThemeProvider theme={DocsTheme}>
      <GlobalStyles />
      <Header siteTitle='Interesting title' />
      <Flex flexDirection='column'>
        <main p={1}>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </Flex>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
