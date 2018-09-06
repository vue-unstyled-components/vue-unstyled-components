<template>
  <component
    v-on="$listeners"
    v-bind="$attrs"
    :is="element"
    :to="!isAnchor ? to : null"
    :tag="!isAnchor ? 'a' : null"
    :href="isAnchor ? to : null"
    :target="isExternal ? '_blank' : null"
    :active-class="!isAnchor ? '-active' : null"
    :exact-active-class="!isAnchor ? '-active' : null"
    class="component-link"
  >
    <slot />
  </component>
</template>

<script>
  import setOptions from '../core/options'
  import { isEnvironment, resolveEnvironment, DEFAULT_ENVIRONMENT } from '../core/environment'

  /**
   * Link component element.
   * @typedef {'a'|'router-link'|'nuxt-link'} LinkComponentElement
   */

  export default {
    props: {
      to: {
        type: [String, Object],
        default: () => null,
      },
      environment: {
        type: String,
        default: DEFAULT_ENVIRONMENT,
        validator: isEnvironment
      },
      isExternal: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      /**
       * Check if component is anchor.
       * @returns {boolean}
       */
      isAnchor () {
        const environment = resolveEnvironment(this)
        const isAnchor = !!(this.isExternal || environment === 'none')
        return isAnchor
      },

      /**
       * It resolves and return Link component.
       * @returns {LinkComponentElement}
       */
      element () {
        const environment = resolveEnvironment(this)
        const element = this.isAnchor            ? 'a'
                      : environment === 'router' ? 'router-link'
                      : environment === 'nuxt'   ? 'nuxt-link'
                                                 : null
        return element
      },
    },

    /**
     * Install Link component and set it's options.
     * @param {Vue} Vue
     * @param {{ environment: Environment, name: string }} [options]
     */
    install (Vue, options) {
      const { environment, name = 'ComponentLink' } = options || {}
      Vue.component(name, this)
      setOptions(Vue, { environment })
    },
  }
</script>
