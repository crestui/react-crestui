import { Link } from 'gatsby';
import PropTypes from "prop-types"
import React from "react"
import { Flex, Text } from 'react-crestui'

const Header = ({ siteTitle }) => (
  <header>
    <Flex flexDirection='row' py={4} px={1}>
      <h1 style={{ margin: 0 }}>
        <Link color='primary' to="/" style={{
          textDecoration: 'none'
        }}>
          <Text size='xx-small'>{siteTitle}</Text>
        </Link>
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
