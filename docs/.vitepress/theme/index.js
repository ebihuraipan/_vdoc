import Theme from 'vitepress/theme'
import Playground from '../components/Playground.vue'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.component('playground', Playground)
  }
}