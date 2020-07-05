import { useContext } from 'react'
import { ThemeContext, css } from 'styled-components'

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

export function getSize(size: number | string): string {
  const theme = useContext(ThemeContext)
  if (theme === null || theme === undefined) {
    throw new Error(
      'Set a default theme using ThemeContextProvider before proceeding'
    )
  }
  if (isNumber(size)) {
    const y = +size
    return theme.spaceInRem * y + 'rem'
  } else {
    return size.toString()
  }
}

export function getIconSize(userSize: UserSize): string {
  const theme = useContext(ThemeContext)
  switch (userSize) {
    case 'xx-small':
      return getSize(theme.iconSizes[0])
      break
    case 'x-small':
      return getSize(theme.iconSizes[1])
      break
    case 'small':
      return getSize(theme.iconSizes[2])
      break
    case 'medium':
      return getSize(theme.iconSizes[3])
      break
    case 'large':
      return getSize(theme.iconSizes[4])
      break
    case 'x-large':
      return getSize(theme.iconSizes[5])
      break
    case 'xx-large':
      return getSize(theme.iconSizes[6])
      break
    case 'xxx-large':
      return getSize(theme.iconSizes[7])
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

  ${({ p }) => p && 'padding: ' + getSize(p) + ';'}

  ${({ px }) =>
    px &&
    'padding-left: ' +
      getSize(px) +
      ';' +
      ' padding-right: ' +
      getSize(px) +
      '; '}

  ${({ py }) =>
    py &&
    'padding-top: ' +
      getSize(py) +
      ';' +
      ' padding-bottom: ' +
      getSize(py) +
      '; '}

  ${({ pt }) => pt && 'padding-top: ' + getSize(pt) + ';'}

  ${({ pb }) => pb && 'padding-bottom: ' + getSize(pb) + ';'}

  ${({ pl }) => pl && 'padding-left: ' + getSize(pl) + ';'}

  ${({ pr }) => pr && 'padding-right: ' + getSize(pr) + ';'}

  ${({ m }) => m && 'margin: ' + getSize(m) + ';'}

  ${({ mx }) =>
    mx &&
    'margin-left: ' + getSize(mx) + ';' + ' margin-right: ' + getSize(mx) + ';'}

  ${({ my }) =>
    my &&
    'margin-top: ' + getSize(my) + ';' + ' margin-bottom: ' + getSize(my) + ';'}

  ${({ mt }) => mt && 'margin-top: ' + getSize(mt) + ';'}

  ${({ mb }) => mb && 'margin-bottom: ' + getSize(mb) + ';'}

  ${({ ml }) => ml && 'margin-left: ' + getSize(ml) + ';'}

  ${({ mr }) => mr && 'margin-right: ' + getSize(mr) + ';'}

  ${({ fs }) => fs && 'font-size: ' + fs + ';'}
`
