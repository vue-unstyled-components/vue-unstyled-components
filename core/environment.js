import get from './helpers/get'

/**
 * Environment type. It's releated to router/link
 * @typedef {'nuxt'|'router'|'external'} Environment
 */

/**
 * Default environment.
 * @type {Environment}
 */
const DEFAULT_ENVIRONMENT = 'external'

/**
 * Environment options.
 * @type {Array.<Environment>}
 */
const ENVIRONMENTS = ['nuxt', 'router', 'external']

/**
 * Check if value is a valid environment.
 * @param {*} value
 * @returns {boolean}
 */
const validate = (value) => Boolean(value && ENVIRONMENTS.includes(value))

/**
 * Resolve environment considering component scope and $UOptions.
 * @param {Vue} Vue
 * @returns {Environment}
 */
const resolve = (Vue) => {
  const component = get(Vue, 'environment')
  const option = get(Vue, '$ComponentOptions.environment')
  const environment = component || option || DEFAULT_ENVIRONMENT
  return environment
}

export { validate, resolve }
