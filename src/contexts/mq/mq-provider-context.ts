import { createContext, useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'

export interface IMediaQuery {
  isDesktopOrLaptop: boolean

  isBigScreen: boolean

  isSmallScreen: boolean

  isTabletOrMobile: boolean

  isTabletOrMobileDevice: boolean

  isPortrait: boolean

  isRetina: boolean
}

export const MQContext = createContext<IMediaQuery>({
  isDesktopOrLaptop: false,
  isBigScreen: false,
  isSmallScreen: false,
  isTabletOrMobile: false,
  isTabletOrMobileDevice: false,
  isPortrait: false,
  isRetina: false,
})

export function useMQ(): IMediaQuery {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })
  const isSmallScreen = useMediaQuery({ query: '(max-width: 680px)' })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return useMemo(
    () => ({
      isDesktopOrLaptop,
      isSmallScreen,
      isBigScreen,
      isTabletOrMobile,
      isTabletOrMobileDevice,
      isPortrait,
      isRetina,
    }),
    [
      isDesktopOrLaptop,
      isSmallScreen,
      isBigScreen,
      isTabletOrMobile,
      isTabletOrMobileDevice,
      isPortrait,
      isRetina,
    ]
  )
}
