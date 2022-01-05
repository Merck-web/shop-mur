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

export const REMOVE_PRODCT_FROM_CART = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
    })
}


export const REMOVE_ALL = (state, product) => {
    state.cart = [];
}