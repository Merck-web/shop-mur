export const addProductToCard = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CARD', { product, quantity })
}