const initialState = {
    cart_products: []
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let newcart = state.cart_products;
            const product_index = state.cart_products.findIndex(product => 
                product.product_id === action.product.product_id)
                if(product_index === -1){
                    newcart = [...state.cart_products, action.product]
                }
            return {
                cart_products: newcart  
            }
            default: return state 
    }
}

export { cartReducer }