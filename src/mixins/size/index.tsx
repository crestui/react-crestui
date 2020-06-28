import { css } from 'styled-components'

export interface SizeProps {
  w?: string | number
  h?: string
  p?: number
  px?: number
  py?: number
  m?: number
  mx?: number
  my?: number
}

export const applySizeProps = css<SizeProps>`
  ${({ w }) => w && 'width: ' + w + ';'}

  ${({ h }) => h && 'height: ' + h + ';'}

  ${({ p }) => p && 'padding: ' + p + 'rem;'}

  ${({ px }) =>
    px && 'padding-left: ' + px + 'rem;' + ' padding-right: ' + px + 'rem; '}

  ${({ py }) =>
    py && 'padding-top: ' + py + 'rem;' + ' padding-bottom: ' + py + 'rem; '}

  ${({ m }) => m && 'margin: ' + m + 'rem;'}

  ${({ mx }) =>
    mx && 'margin-left: ' + mx + 'rem;' + ' margin-right: ' + mx + 'rem; '}

  ${({ my }) =>
    my && 'margin-top: ' + my + 'rem;' + ' margin-bottom: ' + my + 'rem; '}

  ${({ h }) => h && 'height: ' + h + ';'}
`
