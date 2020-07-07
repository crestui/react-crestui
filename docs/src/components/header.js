import { StyledGatsbyLink } from './link'
import PropTypes from "prop-types"
import React from "react"
import { Flex } from 'react-crestui'

const Header = ({ siteTitle }) => (
  <header>
    <Flex flexDirection='row' py={4} px={1}>
      <h1 style={{ margin: 0 }}>
        <StyledGatsbyLink
          to="/"
          style={{
            color: `primary`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </StyledGatsbyLink>
      </h1>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
