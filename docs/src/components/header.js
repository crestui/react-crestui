import { Link } from 'gatsby';
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { Flex, Box } from 'react-crestui'

export const StyledGatsbyLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  text-transform: uppercase;
  color: black;

  &:hover {
    color: #30359B;
    text-decoration: 'underline';
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <Flex flexDirection='row'
      justifyContent='space-between' py={4} px={1}>
        <Box pl={'10%'}>
          <StyledGatsbyLink to="/">
            {siteTitle}
          </StyledGatsbyLink>
        </Box>
        <Box pr={'10%'}>
          <StyledGatsbyLink to="/react-crestui">
            react-crestui
          </StyledGatsbyLink>
        </Box>
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
