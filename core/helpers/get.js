/**
 * Get deeply properties from an object.
 * @param {object} object
 * @param {string} path
 * @param {*} [placeholder]
 * @returns {*}
 */
function get (object, path, placeholder = null) {
  const get = new Function('object', `return object.${path}`)

  try {
    const value = get(object)
    if (value == null)
      return placeholder
    return value
  } catch (_) {
    return placeholder
  }
}

export default get
