export const cartItemCount = (state) => {
    return state.cart.length;
};
export const cartTotalPrice = (state) => {
    let total = 0;
    state.cart.forEach(item => {
        total += item.product.price * item.quantity;
    })
    return total;
};
export const cartTotalSale = (state) => {
    let sale = 0;
    if (state.cart.forEach(item => { item.product.oldprise })) {
        sale = 0;
    }
    else {
        state.cart.forEach(item => {
            sale = (Math.abs(item.product.oldprise - item.product.price) * item.quantity).toFixed(2);
        })
    }
    return sale;
};
export const subTotal = (state) => {
    let subTotal = 0;
    state.cart.forEach(item => {
        subTotal = (Math.abs(item.product.oldprise + item.product.price) * item.quantity).toFixed(2);
    })
    return subTotal;
};