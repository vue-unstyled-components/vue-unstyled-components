import get from './helpers/get'

/**
 * Environment type. It's releated to router/link
 * @typedef {'nuxt'|'router'|'none'} Environment
 */

/**
 * Default environment.
 * @type {Environment}
 */
const DEFAULT_ENVIRONMENT = 'none'

/**
 * Environment options.
 * @type {Array.<Environment>}
 */
const ENVIRONMENTS = ['nuxt', 'router', 'none']

/**
 * Check if value is a valid environment.
 * @param {*} value
 * @returns {boolean}
 */
export const isEnvironment = (value) => !!value && ENVIRONMENTS.includes(value)

/**
 * Resolve environment considering component scope and "$ComponentOptions".
 * @param {Vue} Vue
 * @returns {Environment}
 */
export const resolveEnvironment = (Vue) => {
  const component = get(Vue, 'environment')
  const option = get(Vue, '$ComponentOptions.environment')
  const environment = component || option || DEFAULT_ENVIRONMENT
  return environment
}
