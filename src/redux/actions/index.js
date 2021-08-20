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

const updateSize = (selectedSize, id) => {
    return {
        type: 'UPDATE_SIZE',
        payload: selectedSize,
        itemId: id
    };
}

const filterByGender = (gender) => {
    return {
        type: 'FILTER_BY_GENDER',
        payload: gender
    };
}

const filterBySize = (size) => {
    return {
        type: 'FILTER_BY_SIZE',
        payload: size
    };
}


export {
    addQuantity,
    subQuantity, 
    addProduct, 
    removeProduct, 
    updateTotal, 
    updateSize, 
    filterByGender, 
    filterBySize
};

