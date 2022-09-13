import { useMemo } from 'react'
import { isDarkTheme } from './actions'
import { LinkoutAsset } from './types'

export const useLinkoutTheme = (linkoutAsset: LinkoutAsset) => {
  const theme = useMemo(() => {
    return {
      root: {
        color: linkoutAsset.pageTextColor,
      },
      navbar: {
        backgroundColor: linkoutAsset.pageBackgroundColor,
      },
      paperRoot: {
        backgroundColor: linkoutAsset.pageBackgroundColor,
        borderTop: 'unset',
      },
      bannerRoot: {
        borderBottom: `1px solid ${linkoutAsset.pageBorderColor}`,
      },
      paper: {
        backgroundColor: linkoutAsset.pageBackgroundColor,
        color: linkoutAsset.pageTextColor,
        borderColor: linkoutAsset.pageBorderColor,
        fontFamily: linkoutAsset.pageFontFamily,
      },
      generic: {
        backgroundColor: linkoutAsset.pageBackgroundColor,
        color: linkoutAsset.pageTextColor,
        fontFamily: linkoutAsset.pageFontFamily,
      },
      rootContainer: {
        backgroundColor: linkoutAsset.pageBorderColor,
      },
      externalButton: {
        color: linkoutAsset.pageBackgroundColor,
        backgroundColor:
          linkoutAsset?.externalButtons?.backgroundColor || linkoutAsset.pageTextColor,
      },
      isDark: linkoutAsset.pageBackgroundColor
        ? isDarkTheme(linkoutAsset.pageBackgroundColor)
        : false,
    }
  }, [linkoutAsset])

  return theme
}
