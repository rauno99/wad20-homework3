import Vuex from 'vuex'
import Vue from 'vue'
import posts from './modules/posts'
import user from './modules/user'
import profiles from './modules/profiles'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        profiles,
        posts,
        user
    }
});