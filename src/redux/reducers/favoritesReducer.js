const favoritesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_FAV' :
            console.log('fav array',state);
            return [...state, action.payload];
        case 'SUB_FAV':
            console.log('fav array',state);
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

export default favoritesReducer;