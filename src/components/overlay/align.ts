export type Coords = {
  left: number
  top: number
}

export type onAlignElementsFunc = (
  containerNode: Element,
  portalNode: Element
) => Coords

export function onAlignElementsLeft(alignment: string): onAlignElementsFunc {
  return (containerNode: Element, portalNode: Element): Coords => {
    const containerRect = containerNode.getBoundingClientRect()
    const overlayRect = portalNode.getBoundingClientRect()
    switch (alignment) {
      case 'top':
        return {
          left: containerRect.x,
          top: containerRect.y + window.scrollY,
        }
      case 'bottom':
        return {
          left: containerRect.x,
          top:
            containerRect.y +
            window.scrollY +
            containerRect.height -
            overlayRect.height,
        }
      default:
        throw new Error(
          `Unknown alignment for 'right' placement position ${alignment}`
        )
    }
  }
}

export function onAlignElementsTop(alignment: string): onAlignElementsFunc {
  return (containerNode: Element, portalNode: Element): Coords => {
    const containerRect = containerNode.getBoundingClientRect()
    const overlayRect = portalNode.getBoundingClientRect()
    switch (alignment) {
      case 'left':
        return {
          left: containerRect.x,
          top: containerRect.y + window.scrollY - overlayRect.height,
        }
      case 'right':
        return {
          left: containerRect.x + containerRect.width - overlayRect.width,
          top: containerRect.y + window.scrollY - overlayRect.height,
        }
      default:
        throw new Error(
          `Unknown alignment for 'top' placement position ${alignment}`
        )
    }
  }
}

export function onAlignElementsRight(alignment: string): onAlignElementsFunc {
  return (containerNode: Element, portalNode: Element): Coords => {
    const containerRect = containerNode.getBoundingClientRect()
    const overlayRect = portalNode.getBoundingClientRect()
    switch (alignment) {
      case 'top':
        return {
          left: containerRect.x + containerRect.width,
          top: containerRect.y + window.scrollY,
        }
      case 'bottom':
        return {
          left: containerRect.x + containerRect.width,
          top:
            containerRect.y +
            window.scrollY +
            containerRect.height -
            overlayRect.height,
        }
      default:
        throw new Error(
          `Unknown alignment for 'right' placement position ${alignment}`
        )
    }
  }
}

export function onAlignElementsBottom(alignment: string): onAlignElementsFunc {
  return (containerNode: Element, portalNode: Element): Coords => {
    const containerRect = containerNode.getBoundingClientRect()
    const overlayRect = portalNode.getBoundingClientRect()
    switch (alignment) {
      case 'left':
        return {
          left: containerRect.x,
          top: containerRect.y + containerRect.height + window.scrollY + 1,
        }
      case 'right':
        return {
          left: containerRect.x + containerRect.width - overlayRect.width,
          top: containerRect.y + containerRect.height + window.scrollY + 1,
        }
      default:
        throw new Error(
          `Unknown alignment for 'bottom' placement position ${alignment}`
        )
    }
  }
}

export function getCoords(
  containerNode: Element,
  placement: string,
  alignment: string,
  portalNode: Element
): Coords {
  switch (placement) {
    case 'top':
      return onAlignElementsTop(alignment)(containerNode, portalNode)
      break
    case 'left':
      return onAlignElementsLeft(alignment)(containerNode, portalNode)
      break
    case 'bottom':
      return onAlignElementsBottom(alignment)(containerNode, portalNode)
      break
    case 'right':
      return onAlignElementsRight(alignment)(containerNode, portalNode)
    default:
      throw new Error(
        `Invalid value for placement attribute to overlay - ${placement}. Not Supported`
      )
  }
}
