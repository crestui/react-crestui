import { css } from 'styled-components'

export interface PositionProps {
  /**
   * Indicates position attribute
   */
  pos?: string
}

export const applyPositionProps = css<PositionProps>`
  ${({ pos }) => pos && 'position: ' + pos + ';'}
`
