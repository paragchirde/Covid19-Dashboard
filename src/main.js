import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'

import './assets/css/tailwind.css'

import Headerlogo from './components/HeaderLogo.vue'
Vue.component('HeaderLogo', Headerlogo)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')