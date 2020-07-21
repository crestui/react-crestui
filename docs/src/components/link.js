import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledGatsbyLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  text-transform: uppercase;
  color: black;

  &:hover {
    color: #30359b;
    text-decoration: 'underline';
  }
`

StyledGatsbyLink.propTypes = Link.propTypes

export default StyledGatsbyLink
