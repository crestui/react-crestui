export type Coords = {
  left: number
  top: number
}

export type onAlignElements = (
  containerNode: Element,
  portalNode: Element
) => Coords

function getCoordsForLeft(
  containerNode: Element,
  alignment: string,
  portalNode: Element
): Coords {
  const containerRect = containerNode.getBoundingClientRect()
  const overlayRect = portalNode.getBoundingClientRect()
  switch (alignment) {
    case 'top':
      return {
        left: containerRect.x,
        top: containerRect.y + window.scrollY
      }
    case 'bottom':
      return {
        left: containerRect.x,
        top:
          containerRect.y +
          window.scrollY +
          containerRect.height -
          overlayRect.height
      }
    default:
      throw new Error(
        `Unknown alignment for 'right' placement position ${alignment}`
      )
  }
}

function getCoordsForTop(
  containerNode: Element,
  alignment: string,
  portalNode: Element
): Coords {
  const containerRect = containerNode.getBoundingClientRect()
  const overlayRect = portalNode.getBoundingClientRect()
  switch (alignment) {
    case 'left':
      return {
        left: containerRect.x,
        top: containerRect.y + window.scrollY - overlayRect.height
      }
    case 'right':
      return {
        left: containerRect.x + containerRect.width - overlayRect.width,
        top: containerRect.y + window.scrollY - overlayRect.height
      }
    default:
      throw new Error(
        `Unknown alignment for 'top' placement position ${alignment}`
      )
  }
}

function getCoordsForRight(
  containerNode: Element,
  alignment: string,
  portalNode: Element
): Coords {
  const containerRect = containerNode.getBoundingClientRect()
  const overlayRect = portalNode.getBoundingClientRect()
  switch (alignment) {
    case 'top':
      return {
        left: containerRect.x + containerRect.width,
        top: containerRect.y + window.scrollY
      }
    case 'bottom':
      return {
        left: containerRect.x + containerRect.width,
        top:
          containerRect.y +
          window.scrollY +
          containerRect.height -
          overlayRect.height
      }
    default:
      throw new Error(
        `Unknown alignment for 'right' placement position ${alignment}`
      )
  }
}

function getCoordsForBottom(
  containerNode: Element,
  alignment: string,
  portalNode: Element
): Coords {
  const containerRect = containerNode.getBoundingClientRect()
  const overlayRect = portalNode.getBoundingClientRect()
  switch (alignment) {
    case 'left':
      return {
        left: containerRect.x,
        top: containerRect.y + containerRect.height + window.scrollY
      }
    case 'right':
      return {
        left: containerRect.x + containerRect.width - overlayRect.width,
        top: containerRect.y + containerRect.height + window.scrollY
      }
    default:
      throw new Error(
        `Unknown alignment for 'bottom' placement position ${alignment}`
      )
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
      return getCoordsForTop(containerNode, alignment, portalNode)
      break
    case 'left':
      return getCoordsForLeft(containerNode, alignment, portalNode)
      break
    case 'bottom':
      return getCoordsForBottom(containerNode, alignment, portalNode)
      break
    case 'right':
      return getCoordsForRight(containerNode, alignment, portalNode)
    default:
      throw new Error(
        `Invalid value for placement attribute to overlay - ${placement}. Not Supported`
      )
  }
}
