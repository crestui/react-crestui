export function getColor(_finalTheme: any, colorKey: string): string {
  // eslint-disable-next-line no-prototype-builtins
  if (_finalTheme.colors.hasOwnProperty(colorKey)) {
    return _finalTheme.colors[colorKey]
  } else {
    return colorKey
  }
}
