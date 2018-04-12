import catches from './catches'

/**
 * Get deeply properties from an object.
 * @param {object} object
 * @param {string} path
 * @returns {*}
 */
const get = (object, path) => {
  const getValue = new Function('object', `return object.${path}`)
  return catches(() => getValue(object))
}

export default get
