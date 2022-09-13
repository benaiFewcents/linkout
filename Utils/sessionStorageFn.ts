const URLParams = 'url_params'

const setURLParams = (value: any): void => sessionStorage.setItem(URLParams, value)

const getURlParams = (): any => {
  const value = sessionStorage.getItem(URLParams)
  if (value) return JSON.parse(value)
  else return null
}

const removeURLParams = (): void => sessionStorage.removeItem(URLParams)

export { getURlParams, setURLParams, removeURLParams }
