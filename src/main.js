import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'

import './assets/css/tailwind.css'
import ChloroplethMap from './components/ChloroplethMap.vue'
import VueNumber from 'vue-number-animation'

import Headerlogo from './components/HeaderLogo.vue'
import IndiaTracker from './components/IndiaTracker.vue'
import Information from './components/Information.vue'
import Footer from './components/Footer.vue'
Vue.component('HeaderLogo', Headerlogo)
Vue.component('IndiaTracker', IndiaTracker)
Vue.component('Information', Information)
Vue.component('Footer', Footer)

Vue.config.productionTip = false
Vue.component('ChloroplethMap', ChloroplethMap)
Vue.use(VueNumber)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')