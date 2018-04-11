<template>
  <component
    v-on="$listeners"
    v-bind="$attrs"
    :is="component"
    class="component-link"
  >
    <slot />
  </component>
</template>

<script>
  import { validate, resolve } from '../core/environment'

  export default {
    props: {
      environment: {
        type: String,
        default: null,
        validator: (value) => value === null || validate(value)
      },
    },
    computed: {
      component () {
        const environment = resolve(this)
        const component = environment === 'router' ? 'router-link'
                        : environment === 'nuxt'   ? 'nuxt-link'
                                                   : 'a'
        return component
      },
    },


    install (Vue, options) {
      const {
        name = 'ComponentLink', // ?
        environment = 'external'
      } = options || {}

    }
  }
</script>
