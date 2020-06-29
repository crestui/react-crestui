import { css } from 'styled-components'

export interface FlexProps {
  /**
   * "The flex CSS property sets how a flex item will grow or shrink to fit the space available
   * in its flex container. It is a shorthand for flex-grow, flex-shrink, and flex-basis."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/flex
   */
  flex?: string | number

  /**
   * "The flex-basis CSS property sets the initial main size of a flex item.
   * It sets the size of the content box unless otherwise set with box-sizing."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
   */
  flexBasis?: string

  /**
   * "The flex-direction CSS property sets how flex items are placed in the flex container
   * defining the main axis and the direction (normal or reversed"
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction .
   */
  flexDirection?: string

  /**
   * "The flex-flow CSS property is a shorthand property for flex-direction and flex-wrap properties."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
   */
  flexFlow?: string

  /**
   * "The flex-grow CSS property sets the flex grow factor of a flex item main size.
   * It specifies how much of the remaining space in the flex container
   * should be assigned to the item (the flex grow factor)."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow .
   */
  flexGrow?: string | number

  /**
   * "The flex-shrink CSS property sets the flex shrink factor of a flex item.
   * If the size of all flex items is larger than the flex container,
   * items shrink to fit according to flex-shrink."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink .
   */
  flexShrink?: string | number

  /**
   * "The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
   *  If wrapping is allowed, it sets the direction that lines are stacked. "
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
   */
  flexWrap?: string

  /**
   * "The order CSS property sets the order to lay out an item in a flex or grid container.
   * Items in a container are sorted by ascending order value and then by their source code order."
   *
   * Courtesy: https://developer.mozilla.org/en-US/docs/Web/CSS/order
   */
  flexOrder?: number
}

export const applyFlexProps = css<FlexProps>`
  ${({ flex }) => flex && 'flex: ' + flex + ';'}

  ${({ flexBasis }) => flexBasis && 'flex-basis: ' + flexBasis + ';'}

  ${({ flexDirection }) =>
    flexDirection && 'flex-direction: ' + flexDirection + ';'}

  ${({ flexFlow }) => flexFlow && 'flex-flow: ' + flexFlow + ';'}

  ${({ flexGrow }) => flexGrow && 'flex-grow: ' + flexGrow + ';'}

  ${({ flexShrink }) => flexShrink && 'flex-shrink: ' + flexShrink + ';'}

  ${({ flexWrap }) => flexWrap && 'flex-wrap: ' + flexWrap + ';'}

  ${({ flexOrder }) => flexOrder && 'order: ' + flexOrder + ';'}
`
