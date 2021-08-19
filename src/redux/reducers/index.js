import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import updateTotalReducer from './updateTotalReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    total: updateTotalReducer
});

export default rootReducer;