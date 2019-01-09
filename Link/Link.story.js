import Vue from 'vue'
import Link from './Link'
import { storiesOf } from '@storybook/vue'

const link = 'https://github.com/vue-unstyled-components/vue-unstyled-components'

storiesOf('Link', module)
  .add('Link', () => {
    return {
      components: { Link },
      data: () => ({ link }),
      template: `
        <Link to="#">Home</Link>
      `,
    }
  })
  .add('Link is-external', () => {
    return {
      components: { Link },
      data: () => ({ link }),
      template: `
        <Link :to="link" is-external>Project's repository</Link>
      `,
    }
  })
  .add('Link environment', () => {
    Vue.component('nuxt-link', {
      template: '<a :href="to" data-component="nuxt-link"><slot /></a>',
      props: {
        to: String
      }
    })

    Vue.component('router-link', {
      template: '<a :href="to" data-component="router-link"><slot /></a>',
      props: {
        to: String
      }
    })

    return {
      components: { Link },
      data: () => ({ link }),
      template: `
        <div style="display: flex; flex-direction: column;">
          <Link to="/" environment="none">"none" renders a native anchor tag.</Link>
          <Link to="/" environment="nuxt">"nuxt" renders nuxt-link component.</Link>
          <Link to="/" environment="router">"router" renders router-link component.</Link>
        </div>
      `,
    }
  })
