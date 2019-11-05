export const state = () => ({
    active: null
})

export const mutations = { // değeri işleyeceğimiz kısım // DB uzantısı MODEL
    setActive(state, param) {
        state.active = param;
    }
}

export const actions = { // değeri değiştireceksek kullanacağımız metodlar // POST
    setActive({ commit }, param) {
        commit('setActive', param)
    }
}

export const getters = { // değer okumaya yarayan kısım // GET
    active: state => state.active
}