/* eslint-disable */
import Vue from 'vue'
import App from './App'
import { router } from './router'
// import '@tuia/animation'
import DemoBlock from './components/DemoBlock'
import DemoSection from './components/DemoSection'
import DemoTip from './components/DemoTip'

Vue.component(DemoBlock.name, DemoBlock)
Vue.component(DemoSection.name, DemoSection)
Vue.component(DemoTip.name, DemoTip)

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
