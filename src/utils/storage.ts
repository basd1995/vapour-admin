/**
 * 存入localStorage
 * @param key
 * @param value
 */
export const setItem = (key: string, value: string | object) => {
  if (typeof value === 'object')
    value = JSON.stringify(value)

  window.localStorage.setItem(key, value)
}

/**
 * 读取localStorage
 * @param key
 */
export const getItem = (key: string) => {
  const data = window.localStorage.getItem(key) || ''
  try {
    return JSON.parse(data)
  }
  catch (err) {
    return data
  }
}

/**
 * 清楚对应的localStorage
 * @param key
 */
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}

/**
 * 删除localStorage所有数据
 */
export const removeAllItem = () => {
  window.localStorage.clear()
}
