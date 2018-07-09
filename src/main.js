import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueAnalytics from 'vue-analytics'
import './assets/scss/app.scss'

Vue.use(Buefy)

Vue.use(VueAnalytics, {
  id: 'UA-109246807-2',
  debug: {
    sendHitTask: false
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
