import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'
import { handleApiErrors } from '../../../Utils/handleApiErrors'
import { COMMON_FAILURE } from '../../../Constants/common'
import config from '../../../config'
import { LinkoutArgs, LinkoutAsset } from './types'
import { RejectValue } from '../../../Types'

export const getLinkoutAsset = createAsyncThunk<LinkoutAsset, LinkoutArgs, RejectValue>(
  'linkout/get',
  async (args: LinkoutArgs, { rejectWithValue }) => {
    const toasterId = 'getLinkoutToaster'
    try {
      const url = `${config.ApiBaseUrl}/publisher/digitalAsset/checkout`
      const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'content-type': 'application/json',
        }),
        body: JSON.stringify(args),
      })
      const verifiedResponse = handleApiErrors(response)
      const { data, message, success } = await verifiedResponse.json()
      if (!success) {
        const errorMessage = message || COMMON_FAILURE
        toast.error(errorMessage, { id: toasterId })
        return rejectWithValue({ 'Server Error:': errorMessage })
      }
      if (data.externalButtonsHtml) {
        data.externalButtons = JSON.parse(data.externalButtonsHtml)
      }

      if (
        data.assetDescription === '<h2>About me</h2>' ||
        data.assetDescription === '<h2>Description</h2>'
      ) {
        data.assetDescription = ''
      }
      return data
    } catch (ex: any) {
      const errorMessage = ex?.message || COMMON_FAILURE
      toast.error(errorMessage, { id: toasterId })
      return rejectWithValue({ 'Server Error:': errorMessage })
    }
  }
)
