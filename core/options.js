/**
 * Set "$ComponentOptions" on Vue's prototype.
 * @param {Vue} Vue
 * @param {Object.<string, *>} options
 */
const setOptions = (Vue, options) => {
  const $options = Vue.prototype.$ComponentOptions || {}
  Vue.prototype.$ComponentOptions = { ...$options, ...options }
}

export default setOptions
