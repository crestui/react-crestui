import { Link } from 'gatsby';
import styled from 'styled-components'
import { getColor } from 'react-crestui'

const StyledGatsbyLink = styled(Link)`
  ${({ theme, color }) => color && 'color: ' + getColor(theme, color) + ';'}

  ${({ theme, bg }) => bg && 'background-color: ' + getColor(theme, bg) + ';'}
`;

export default StyledGatsbyLink
