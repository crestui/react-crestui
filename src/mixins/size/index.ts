import { css } from 'styled-components'

const isNumber = (n: string | number) => typeof n === 'number' && !isNaN(n)

export type UserSize =
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
    return theme.spaceInRem * y + 'rem'
  } else {
    return size.toString()
  }
}

export const getIconSize = (theme: any, userSize: UserSize): string => {
  switch (userSize) {
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
      throw new Error(`Invalid size value - ${userSize} given as parameter`)
  }
}

export interface SizeProps {
  w?: string
  h?: string
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

  ${({ h }) => h && 'height: ' + h + ';'}

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
