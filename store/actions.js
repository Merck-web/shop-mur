export const addProductToCard = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CARD', { product, quantity })
}
export const removeProductFromCart = ({ commit }, product) => {
    commit('REMOVE_PRODCT_FROM_CART', product)
}
export const clearAll = ({ commit }, product) => {
    commit('REMOVE_ALL', product)
}