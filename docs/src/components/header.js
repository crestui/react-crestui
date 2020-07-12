import PropTypes from "prop-types"
import React from "react"
import { Flex, Box } from 'react-crestui'
import StyledGatsbyLink from './link'


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
