import { Link } from 'gatsby';
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { Flex } from 'react-crestui'

const StyledGatsbyLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  text-transform: uppercase;
  padding-left: 20px;
  color: black;

  &:hover {
    color: #30359B;
    text-decoration: 'underline';
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <Flex flexDirection='row' py={4} px={1}>
        <StyledGatsbyLink to="/">
          {siteTitle}
        </StyledGatsbyLink>
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
