<template>
  <component
    v-on="$listeners"
    v-bind="$attrs"
    :is="component"
    :to="!isHREF ? to : null"
    :href="isHREF ? to : null"
    class="component-link"
  >
    <slot />
  </component>
</template>

<script>
  import setOptions from '../core/options'
  import { isEnvironment, resolveEnvironment } from '../core/environment'

  /**
   * Environment type. It's releated to router/link
   * @typedef {'nuxt'|'router'|'external'} Environment
   */

  export default {
    props: {
      to: {
        type: [String, Object],
        default: () => null
      },
      environment: {
        type: String,
        default: null,
        validator: (value) => value === null || isEnvironment(value)
      },
    },
    computed: {
      isHREF () {
        const isHREF = this.component === 'a'
        const isValid = !!(typeof this.to === 'string' && this.to.trim())
        return isAnchor && isValid
      },
      component () {
        const environment = resolveEnvironment(this)
        const component = environment === 'router' ? 'router-link'
                        : environment === 'nuxt'   ? 'nuxt-link'
                                                   : 'a'
        return component
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
