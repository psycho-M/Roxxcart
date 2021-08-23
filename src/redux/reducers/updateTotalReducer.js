const updateTotalReducer = (state = 0, action) => {
    if(action.type === 'UPDATE_TOTAL') {
        let amountStorage = window.localStorage
        amountStorage.setItem('totalAmount', state+action.payload);
        
        return state + action.payload;
    }
    return state;
}

export default updateTotalReducer;