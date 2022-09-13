import getRandomString from './getRandomString'
import { getItem, removeItem, setItem } from './localStorageFn'
import { v4 as uuidv4 } from 'uuid'

const authTokenName = 'fcAuthToken'
const refreshTokenName = 'fcRefreshToken'
const deviceKey = 'fewcentDeviceKey'
const setAuthToken = (accessToken: string): void => {
  setItem(authTokenName, accessToken)
}

const getAuthToken = (): any => {
  let authToken = getItem(authTokenName)
  if (authToken === 'null') {
    removeAuthToken()
    removeRefreshToken()
    return undefined
  } else {
    return authToken
  }
}

const removeAuthToken = (): void => {
  removeItem('balance_before_paypal')
  removeItem(authTokenName)
}

const setRefreshToken = (refreshToken: string): void => setItem(refreshTokenName, refreshToken)

const getRefreshToken = (): any => {
  let refreshToken = getItem(refreshTokenName)
  if (refreshToken === 'null') {
    removeRefreshToken()
    return undefined
  } else {
    return refreshToken
  }
}

const removeRefreshToken = (): void => removeItem(refreshTokenName)

export const getOrCreateFCAnonymousID = (): string => {
  const fcAnonymousIDKey = 'fcAnonymousID'
  const fcAnonymousID = getItem(fcAnonymousIDKey)

  if (fcAnonymousID) {
    return fcAnonymousID
  } else {
    const uid = uuidv4()
    setItem(fcAnonymousIDKey, uid)
    return uid
  }
}

const getOrCreateDeviceIdentity = (): string => {
  const fewcentDeviceKey = getItem(deviceKey)

  if (fewcentDeviceKey) {
    return fewcentDeviceKey
  } else {
    const uid = getRandomString(15)
    setItem(deviceKey, uid)
    return uid
  }
}

const getDeviceIdentity = (): any => getItem(deviceKey)

const setDeviceIdentity = (value: string): void => setItem(deviceKey, value)

const removeDeviceIdentity = (): void => removeItem(deviceKey)

export {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
  getOrCreateDeviceIdentity,
  getDeviceIdentity,
  setDeviceIdentity,
  removeDeviceIdentity,
}
