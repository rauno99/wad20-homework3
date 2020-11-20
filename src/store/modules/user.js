import axios from 'axios'

//to handle state
const state = {
    user: {}
}

//to handle state
const getters = {
    theUser: (state) => state.user
}

//to handle actions
const actions = {
    async getUser({ commit }) {
        const response = await axios.get('https://private-anon-1f4633fba3-wad20postit.apiary-mock.com/users/1');
        commit('SET_USER', response.data);
    }
}

//to handle mutations
const mutations = {
    SET_USER: (state, user) => (state.user = user)
}

//export store module
export default {
    state,
    getters,
    actions,
    mutations
}