import { css } from 'styled-components'
import { getSize } from '../size'
import { getColor } from '../color'

export interface BorderProps {
  /**
   * bs is an alias for border-style property
   */
  bs?: string

  /**
   * bw is an alias for border-width property
   */
  bw?: string | number

  /**
   * border-Color
   */
  bc?: string

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

  ${({ bc }) => bc && 'border-color: ' + getColor(bc) + ';'}
`
