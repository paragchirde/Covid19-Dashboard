import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './components/Dashboard.vue'
import UserHits from './components/UserHits.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Dashboard
    },
    {
        path: '/hits',
        component: UserHits
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;