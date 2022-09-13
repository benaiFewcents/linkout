import { createSlice } from '@reduxjs/toolkit'
import { LinkoutState } from './types'
import { IAction } from '../../../Types'
import { getLinkoutAsset } from './service'
import { HYDRATE } from 'next-redux-wrapper';

const initialState: LinkoutState = {
  linkout: {
    accessKey: '',
    assetCategory: '',
    assetDescription: '',
    assetDynamicContent: '',
    assetGraphicUrl: '',
    assetName: '',
    assetSummary: '',
    contentIdentifier: '',
    creatorContactInfoEmail: '',
    creatorContactInfoText: '',
    creatorFacebookLink: '',
    creatorInstagramLink: '',
    creatorProfilePictureUrl: '',
    creatorTiktokLink: '',
    creatorTwitterLink: '',
    creatorYoutubeLink: '',
    fewcentsLogo: '',
    linkOutOwner: '',
    pageBackgroundColor: '',
    pageBorderColor: '',
    pageFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    pageTextColor: '',
    paymentCompletedUrl: '',
    paymentErrorUrl: '',
    pluginColor: '',
    publisherLogo: '',
    publisherName: '',
    websiteUrl: '',
    externalButtonsHtml: '',
    externalButtons: { backgroundColor: '', list: [] },
    approved: false,
  },
  inProcess: true,
  errors: null,
}

const linkoutSlice = createSlice({
  name: 'linkout',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
    .addCase(HYDRATE, (state: LinkoutState, action: IAction) => {
      state.linkout = action.payload.linkout
      state.inProcess = false
      })
      .addCase(getLinkoutAsset.pending, (state: LinkoutState) => {
        state.inProcess = true
      })
      .addCase(getLinkoutAsset.fulfilled, (state: LinkoutState, action: IAction) => {
        state.inProcess = false
        state.linkout = action.payload
      })
      .addCase(getLinkoutAsset.rejected, (state: LinkoutState, action: IAction) => {
        state.inProcess = false
        state.errors = action.payload ?? null
      })
  },
})

export default linkoutSlice.reducer
