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
   * radius indicates borderRadius
   */
  radius?: string | number

  /**
   * "The box-shadow CSS property adds shadow effects around an element's frame.
   * You can set multiple effects separated by commas. "
   * Courtesy:  https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
   */
  shadow?: string
}

export const applyBorderProps = css<BorderProps>`
  ${({ theme, radius }) =>
    radius && 'border-radius: ' + getSize(theme, radius) + ' !important;'}

  ${({ bs }) => bs && 'border-style: ' + bs + ';'}

  ${({ theme, bw }) => bw && 'border-width: ' + getSize(theme, bw) + ';'}

  ${({ theme, bc }) => bc && 'border-color: ' + getColor(theme, bc) + ';'}

  ${({ shadow }) => shadow && 'box-shadow: ' + shadow + ';'}
`
