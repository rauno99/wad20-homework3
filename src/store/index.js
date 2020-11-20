import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

//to handle state
const state = {
    posts: []
}

//to handle state
const getters = {
    allPosts: (state) => state.posts
}

//to handle actions
const actions = {
    async getPosts({ commit }) {
        const response = await axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts');
        commit('SET_POSTS', response.data);
    }
}

//to handle mutations
const mutations = {
    SET_POSTS: (state, posts) => (state.posts = posts)
}

//export store module
export default {
    state,
    getters,
    actions,
    mutations
}