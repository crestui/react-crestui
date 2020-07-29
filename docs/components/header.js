import PropTypes from 'prop-types'
import React from 'react'
import { Flex, Box, NavLink } from 'react-crestui'
import Link from 'next/link'

const Header = ({ siteTitle }) => (
  <header>
    <Flex flexDirection='row' justifyContent='space-between' py={4} px={1}>
      <Box pl={'5%'}>
        <Link href='/'>
          <NavLink>{siteTitle}</NavLink>
        </Link>
      </Box>
      <Flex />
      <Box pr={'5%'}>
        <Link href='/react-crestui'>
          <NavLink>react-crestui</NavLink>
        </Link>
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
