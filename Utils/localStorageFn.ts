const setItem = (key: string, value: any): void => localStorage.setItem(key, value)

const getItem = (key: string, type: string = 'none'): any => {
  if (type === 'json') {
    const value = localStorage.getItem(key)
    if (value) return JSON.parse(value)
    else return null
  } else {
    return localStorage.getItem(key)
  }
}

const removeItem = (key: string): void => localStorage.removeItem(key)

export { getItem, removeItem, setItem }
