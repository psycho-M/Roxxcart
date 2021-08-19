const addQuantity = (id) => {
    return {
        type: 'ADD_QUANTITY',
        payload: id
    };
};

const subQuantity = (id) => {
    return {
        type: 'SUB_QUANTITY',
        payload: id
    };
};

const addProduct = (item) => {
    return {
        type: 'ADD_PRODUCT',
        payload: item
    };
};

const removeProduct = (id) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: id
    };
};

const updateTotal = (change) => {
    return {
        type: 'UPDATE_TOTAL',
        payload: change
    }
};

export { addQuantity, subQuantity, addProduct, removeProduct, updateTotal };

