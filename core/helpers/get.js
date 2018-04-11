/**
 * Get deeply properties from an object.
 * @param {object} object
 * @param {string} path
 * @returns {*}
 */
const get = (object, path) => {
  return catches(() => new Function('o', `return o.${path}`)(object))
}

const catches = (fn) => {
  try {
    return fn()
  } catch (_) {
    return _
  }
}

export default get
