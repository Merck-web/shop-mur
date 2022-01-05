export const ADD_TO_CARD = (state, { product, quantity }) => {

    let productInCart = state.cart.find(item => {
        return item.product.id === product.id;
    })

    if (productInCart) {
        productInCart.quantity += quantity;
        return
    }

    state.cart.push(
        { product, quantity }
    )
}