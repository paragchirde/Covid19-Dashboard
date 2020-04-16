import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './components/Dashboard.vue'
import UserHits from './components/UserHits.vue'
<<<<<<< HEAD

=======
import Services from './components/Services.vue'
>>>>>>> 9a53bc4c404201751de885fcbb012a25d6204f8f

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Dashboard
    },
    {
        path: '/hits',
        component: UserHits
    },
    {
        path: '/services',
        component: Services,
        name: Services,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;