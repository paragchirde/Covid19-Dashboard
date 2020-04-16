import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'

import './assets/css/tailwind.css'
import ChloroplethMap from './components/ChloroplethMap.vue'

Vue.config.productionTip = false
Vue.component('ChloroplethMap', ChloroplethMap)


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')