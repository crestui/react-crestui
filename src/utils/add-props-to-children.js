import React from 'react'

export function addPropsToChildren(children, fn) {
  return React.Children.map(children, (child, index) => {
    if (child === undefined || child === null) {
      return null
    }
    if (
      typeof child === 'number' ||
      typeof child === 'string' ||
      typeof child === 'boolean'
    ) {
      return null
    }
    return React.cloneElement(child, { ...child.props, ...fn(index) })
  })
}
