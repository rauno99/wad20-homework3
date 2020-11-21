import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Index from '@/components/Index.vue'
import Browse from '@/components/Browse.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', // link kus see asub
            name: 'Login',
            component: Login
        },

        {
            path: '/index',
            name: 'Index',
            component: Index
        },

        {
            path: '/browse',
            name: 'Browse',
            component: Browse
        }
    ]
})
