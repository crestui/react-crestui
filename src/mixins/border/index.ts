import { css } from 'styled-components'
import { getSize } from '../size'

export interface BorderProps {
  /**
   * bs is an alias for border-style property
   */
  bs?: string

  /**
   * bw is an alias for border-width property
   */
  bw?: string

  /**
   * Radius indicates borderRadius and the units are in 'rem'
   */
  radius?: string | number
}

export const applyBorderProps = css<BorderProps>`
  ${({ radius }) =>
    radius && 'border-radius: ' + getSize(radius) + ' !important;'}

  ${({ bs }) => bs && 'border-style: ' + bs + ';'}

  ${({ bw }) => bw && 'border-width: ' + getSize(bw) + ';'}
`
