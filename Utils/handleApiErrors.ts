import { setURLParams, getURlParams } from './sessionStorageFn'
import { removeAuthToken, removeRefreshToken } from './auth'

const handleApiErrors = (response: Response) => {
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Unauthorized')
    }
  }
  return response
}

const manualLogout = () => {
  removeAuthToken()
  removeRefreshToken()
  const urlParams = getURlParams()
  if (urlParams) {
    setURLParams(JSON.stringify({ ...urlParams, loginMethod: null }))
  }
  window.location.href = window.location.host + '/login'
  window.location.reload()
}

export { handleApiErrors, manualLogout }
