import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', // link kus see asub
            name: 'Login',
            component: Login
        }
    ]
})
