const initialState = {
    cart_products: []
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                cart_products: [...state.cart_products, action.product]
            }
            default: return state 
    }
}

export { cartReducer }