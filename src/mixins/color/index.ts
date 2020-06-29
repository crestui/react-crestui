export function getColor(_finalTheme: any, colorKey: string): string {
  // eslint-disable-next-line no-prototype-builtins
  if (_finalTheme.color.hasOwnProperty(colorKey)) {
    return _finalTheme.color[colorKey]
  } else {
    return colorKey
  }
}
