import { css } from 'styled-components'

export interface SizeProps {
  w?: string | number
  h?: string
}

export const getSizeProps = css<SizeProps>`
  ${({ w }) => w && 'width: ' + w + ';'}

  ${({ h }) => h && 'height: ' + h + ';'}
`
