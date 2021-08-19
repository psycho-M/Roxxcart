const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        case 'REMOVE_PRODUCT':
            return state.filter(item => item.id !== action.payload);
        case 'ADD_QUANTITY':
            const tempCart = [...state];
            for (let i = 0; i < tempCart.length; i++) {
                if (tempCart[i].id === action.payload) {
                    tempCart[i].quantity += 1;
                    tempCart[i].currPrice = tempCart[i].price * tempCart[i].quantity;
                    return tempCart;
                }
            }
        case 'SUB_QUANTITY':
            const tempCart1 = [...state];
            for (let i = 0; i < tempCart1.length; i++) {
                if (tempCart1[i].id === action.payload) {
                    tempCart1[i].quantity -= 1;
                    if(tempCart1[i].quantity === 0) {
                        return tempCart1.filter(item => item.id !== action.payload);
                    }
                    tempCart1[i].currPrice = tempCart1[i].price * tempCart1[i].quantity;
                    return tempCart1;
                }
            }
        default:
            return state;
    };
};

export default cartReducer;