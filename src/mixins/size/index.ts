import { css } from 'styled-components'

const isNumber = (n: string | number) => typeof n === 'number' && !isNaN(n)

export type ComponentSize =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large'

export const getSize = (theme: any, size: number | string): string => {
  if (isNumber(size)) {
    const y = +size
    return theme.space.value * y + theme.space.unit
  } else {
    return size.toString()
  }
}

export const getIconSize = (
  theme: any,
  componentSize: ComponentSize
): string => {
  switch (componentSize) {
    case 'xx-small':
      return getSize(theme, theme.iconSizes[0])
      break
    case 'x-small':
      return getSize(theme, theme.iconSizes[1])
      break
    case 'small':
      return getSize(theme, theme.iconSizes[2])
      break
    case 'medium':
      return getSize(theme, theme.iconSizes[3])
      break
    case 'large':
      return getSize(theme, theme.iconSizes[4])
      break
    case 'x-large':
      return getSize(theme, theme.iconSizes[5])
      break
    case 'xx-large':
      return getSize(theme, theme.iconSizes[6])
      break
    case 'xxx-large':
      return getSize(theme, theme.iconSizes[7])
      break
    default:
      throw new Error(
        `Invalid size value - ${componentSize} given as parameter`
      )
  }
}

export interface SizeProps {
  w?: string
  minW?: string
  maxW?: string
  h?: string
  minH?: string
  maxH?: string
  p?: number | string
  px?: number | string
  py?: number | string
  pt?: number | string
  pb?: number | string
  pl?: number | string
  pr?: number | string
  m?: number | string
  mx?: number | string
  my?: number | string
  mt?: number | string
  mb?: number | string
  ml?: number | string
  mr?: number | string

  fs?: string
}

export const applySizeProps = css<SizeProps>`
  ${({ w }) => w && 'width: ' + w + ';'}
  ${({ minW }) => minW && 'min-width: ' + minW + ';'}
  ${({ maxW }) => maxW && 'max-width: ' + maxW + ';'}

  ${({ h }) => h && 'height: ' + h + ';'}
  ${({ minH }) => minH && 'min-height: ' + minH + ';'}
  ${({ maxH }) => maxH && 'max-height: ' + maxH + ';'}

  ${({ theme, p }) => p && 'padding: ' + getSize(theme, p) + ';'}

  ${({ theme, px }) =>
    px &&
    'padding-left: ' +
      getSize(theme, px) +
      ';' +
      ' padding-right: ' +
      getSize(theme, px) +
      '; '}

  ${({ theme, py }) =>
    py &&
    'padding-top: ' +
      getSize(theme, py) +
      ';' +
      ' padding-bottom: ' +
      getSize(theme, py) +
      '; '}

  ${({ theme, pt }) => pt && 'padding-top: ' + getSize(theme, pt) + ';'}

  ${({ theme, pb }) => pb && 'padding-bottom: ' + getSize(theme, pb) + ';'}

  ${({ theme, pl }) => pl && 'padding-left: ' + getSize(theme, pl) + ';'}

  ${({ theme, pr }) => pr && 'padding-right: ' + getSize(theme, pr) + ';'}

  ${({ theme, m }) => m && 'margin: ' + getSize(theme, m) + ';'}

  ${({ theme, mx }) =>
    mx &&
    'margin-left: ' +
      getSize(theme, mx) +
      ';' +
      ' margin-right: ' +
      getSize(theme, mx) +
      ';'}

  ${({ theme, my }) =>
    my &&
    'margin-top: ' +
      getSize(theme, my) +
      ';' +
      ' margin-bottom: ' +
      getSize(theme, my) +
      ';'}

  ${({ theme, mt }) => mt && 'margin-top: ' + getSize(theme, mt) + ';'}

  ${({ theme, mb }) => mb && 'margin-bottom: ' + getSize(theme, mb) + ';'}

  ${({ theme, ml }) => ml && 'margin-left: ' + getSize(theme, ml) + ';'}

  ${({ theme, mr }) => mr && 'margin-right: ' + getSize(theme, mr) + ';'}

  ${({ fs }) => fs && 'font-size: ' + fs + ';'}
`
