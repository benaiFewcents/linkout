export interface ExternalButton {
  title: string
  url: string
  enabled: boolean
}

export type LinkoutAsset = {
  accessKey: string
  assetCategory: string
  assetDescription: string
  assetDynamicContent: string | null
  assetGraphicUrl: string | null
  assetName: string
  assetSummary: string
  contentIdentifier: string
  creatorContactInfoEmail: string | null
  creatorContactInfoText: string
  creatorFacebookLink: string | null
  creatorInstagramLink: string | null
  creatorProfilePictureUrl: string | null
  creatorTiktokLink: string | null
  creatorTwitterLink: string | null
  creatorYoutubeLink: string | null
  fewcentsLogo: string | null
  linkOutOwner: string
  pageBackgroundColor: string
  pageBorderColor: string
  pageFontFamily: string
  pageTextColor: string
  paymentCompletedUrl: string | null
  paymentErrorUrl: string | null
  pluginColor: string
  publisherLogo: string | null
  publisherName: string
  websiteUrl: string | null
  externalButtonsHtml: string
  externalButtons: { backgroundColor: string; list: ExternalButton[] }
  approved: boolean
}

export type LinkoutState = {
  linkout: LinkoutAsset
  inProcess: boolean
  errors: { [k: string]: string } | null
}

export interface LinkoutArgs {
  assetCode: string
  publisherSlug: string
}
