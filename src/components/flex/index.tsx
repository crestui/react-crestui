import styled, { css } from 'styled-components'

export interface FlexProps {
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  alignContents?: string
  flexWrap?: string
}

export const Flex = styled.div<FlexProps>`
  display: flex;

  ${(props) =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `};
  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `};
`

export default Flex
