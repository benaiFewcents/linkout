import config from '../../../config'
import { LinkoutAsset } from './types'

export const isDarkTheme = (hex: string) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    return false
  }
  let r = parseInt(hex.slice(0, 2), 16)
  let g = parseInt(hex.slice(2, 4), 16)
  let b = parseInt(hex.slice(4, 6), 16)

  return r * 0.299 + g * 0.587 + b * 0.114 < 150
}

export const loadScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = config.PaywallUrl
    script.async = true
    document.head.appendChild(script)
    script.onload = resolve
    script.onerror = reject
  })
}

export const loadPaywall = async (linkout: any) => {
  try {
    const win: any = window
    if (!win.Paywall) {
      await loadScript()
    }

    win.Paywall({
      accessKey: linkout.accessKey,
      category: linkout.assetCategory,
      articleIdentifier: linkout.contentIdentifier,
      contentSelector: 'paywallHost',
      logoUrl: linkout.publisherLogo,
      bubblePosition: 'right',
      unlockOnLoad: true,
      layout: 'vertical',
      fontFamily: linkout.fontFamily,
      isHorizontal: false,
      isLinkout: true,
      isDigitalAsset: true,
      primaryColor: linkout.pluginColor,
      backgroundColor: linkout.pageBackgroundColor,
      secondaryColor: linkout.pageTextColor,
      borderColor: linkout.pageBorderColor,
    })
  } catch (error) {
    console.error(error)
  }
}

export const openWindow = (url: string) => {
  url = url.indexOf('https://') === 0 || url.indexOf('http://') === 0 ? url : `http://${url}`
  window.open(url)
}
