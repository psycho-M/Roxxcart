const updateTotalReducer = (state = 0, action) => {
    if(action.type === 'UPDATE_TOTAL') {
        return state + action.payload;
    }
    return state;
}

export default updateTotalReducer;