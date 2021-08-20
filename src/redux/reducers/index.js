import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import updateTotalReducer from './updateTotalReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    total: updateTotalReducer,
    shop: filterReducer
});

export default rootReducer;