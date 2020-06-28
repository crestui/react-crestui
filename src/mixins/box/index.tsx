import { css } from 'styled-components'

/**
 * BlockBoxProps represents the properties for css box alignment.
 *
 * The names and the values of the properties are from:
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment
 */
export interface BlockBoxProps {
  /**
   * "The CSS align-content property sets the distribution of space between and
   * around content items along a flexbox's cross-axis or a grid's block axis."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   */
  alignContent?: string

  /**
   * "The CSS align-items property sets the align-self value on all direct children as a group.
   * In Flexbox, it controls the alignment of items on the Cross Axis.
   * In Grid Layout, it controls the alignment of items on the Block Axis within their grid area."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  alignItems?: string

  /**
   * "The align-self CSS property overrides a grid or flex item's align-items value.
   * In Grid, it aligns the item inside the grid area.
   * In Flexbox, it aligns the item on the cross axis."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  alignSelf?: string

  /**
   * "The CSS justify-content property defines how the browser distributes space between and around
   * content items along the main-axis of a flex container, and the inline axis of a grid container."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justifyContent?: string

  /**
   * "The CSS justify-items property defines the default justify-self for all items of the box,
   * giving them all a default way of justifying each box along the appropriate axis."
   *
   * Courtesy:  https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
   */
  justifyItems?: string

  /**
   * "The CSS justify-self property sets the way a box is justified inside its alignment container
   * along the appropriate axis."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
   */
  justifySelf?: string
}

export const getBlockBoxProps = css<BlockBoxProps>`
  ${({ alignContent }) =>
    alignContent && 'align-content: ' + alignContent + ';'}

  ${({ alignItems }) => alignItems && 'align-items: ' + alignItems + ';'}

  ${({ alignSelf }) => alignSelf && 'align-self: ' + alignSelf + ';'}

  ${({ justifyContent }) =>
    justifyContent && 'justify-content: ' + justifyContent + ';'}

  ${({ justifyItems }) =>
    justifyItems && 'justify-items: ' + justifyItems + ';'}

  ${({ justifySelf }) => justifySelf && 'justify-self: ' + justifySelf + ';'}
`
