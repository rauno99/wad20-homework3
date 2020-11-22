import axios from 'axios'

//to handle state
const state = {
    profiles: []
}

//to handle state
const getters = {
    allProfiles: (state) => state.profiles
}

//to handle actions
const actions = {
    async getProfiles({ commit }) {
        const response = await axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles');
        commit('SET_PROFILES', response.data);
    }
}

//to handle mutations
const mutations = {
    SET_PROFILES: (state, profiles) => (state.profiles = profiles)
}

//export store module
export default {
    state,
    getters,
    actions,
    mutations
}