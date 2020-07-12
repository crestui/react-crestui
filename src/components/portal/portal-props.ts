// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import IDisclosure from '../../mixins/disclosure'

// Use a ternary operator to make sure that the document object is defined
export const portalRoot =
  typeof document !== `undefined`
    ? document.getElementById('portal-root')
    : null

export const defaultZIndex = 10

export interface PortalProps {
  /**
   * closeOnMouseLeave indicates if there is a mouseleave event ,
   * this portal should set the disclosure to be false
   */
  closeOnMouseLeave?: boolean

  /**
   *
   */
  disclosure: IDisclosure

  /**
   * The actual description of the portal
   */
  children: React.ReactNode

  /**
   * zIndex represents the zIndex to be given for this portal.
   *
   * If not given, it defaults to 'defaultZIndex' variable published from react-crestui ( i.e. 10 ).
   *
   */
  zIndex?: number
}
