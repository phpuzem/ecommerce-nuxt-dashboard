export const state = () => ({
    active: null
})

export const mutations = { // değeri işleyeceğimiz kısım // DB uzantısı MODEL // Sync
    setActive(state, param) {
        state.active = param;
    }
}

export const actions = { // değeri değiştireceksek kullanacağımız metodlar // POST // Business Logic // Async
    setActive({ commit }, param) {
        commit('setActive', param)
    }
}

export const getters = { // değer okumaya yarayan kısım // GET
    active: state => state.active
}