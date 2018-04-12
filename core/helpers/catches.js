/**
 * Run callback and return it's value without throw any error.
 * @param {function():T} callback
 * @template T
 * @returns {T}
 */
const catches = (callback) => {
  try {
    return callback()
  } catch (_) {
    return
  }
}

export default catches
