import Vue from 'vue'
import App from './App.vue'
import { Button, Select, Tabs, TabPane, Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)
Vue.use(Select)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
