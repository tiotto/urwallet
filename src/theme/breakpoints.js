const screenSize = {
  xs: 0,
  sm: 328,
  md: 600,
  lg: 1284,
  xl: 1280
}

const device = {
  mobile: `(min-width: ${screenSize.sm}px)`,
  tablet: `(min-width: ${screenSize.md}px)`,
  desktop: `(min-width: ${screenSize.lg}px)`
}

export {
  device,
  screenSize
}
