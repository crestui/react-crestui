import { css } from 'styled-components'

export interface FlexProps {
  flexDirection?: string
  flexWrap?: boolean
}

export const getFlexProps = css<FlexProps>`
  ${({ flexDirection }) =>
    flexDirection && 'flex-direction: ' + flexDirection + ';'}

  ${({ flexWrap }) => flexWrap && 'flex-wrap: ' + flexWrap + ';'}
`
