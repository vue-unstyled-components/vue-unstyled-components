import Vue from 'vue'
import { configure } from '@storybook/vue'

function loadStories () {
  const load = require.context('../', true, /\.story\.js?$/)
  const modules = load.keys()
  modules.forEach(load)
}

configure(loadStories, module)
