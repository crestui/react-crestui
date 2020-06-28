import styled, { css } from 'styled-components'

export interface BlockBoxProps {
  alignContent?: string
  alignItems?: string
  justifyContent?: string
  justifyItems?: string
  justifySelf?: string
}

export interface BoxProps {
  color: string
}

export const getBlockBoxProps = css<BlockBoxProps>`
  ${({ alignContent }) =>
    alignContent && 'align-content: ' + alignContent + ';'}

${({ alignItems }) => alignItems && 'align-items: ' + alignItems + ';'}

${({ justifyContent }) =>
  justifyContent && 'justify-content: ' + justifyContent + ';'}

${({ justifyItems }) => justifyItems && 'justify-items: ' + justifyItems + ';'}

${({ justifySelf }) => justifySelf && 'justify-self: ' + justifySelf + ';'}
`

export const Box = styled.div<BoxProps & BlockBoxProps>`
  ${getBlockBoxProps}
`
