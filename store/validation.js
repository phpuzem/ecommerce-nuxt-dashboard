export const state = () => ({
    errors: {}
})

export const mutations = {
    setErrors(state, param) {
        state.errors = param;
    },
    clearErrors(state) {
        state.errors = {};
    }
}

export const actions = {
    setErrors({ commit }, param) {
        commit('setErrors', param)
    },
    clearErrors({ commit }) {
        commit('clearErrors')
    }
}

export const getters = {
    errors: state => state.errors
}