import {combineReducers} from 'redux';
import products from './products';
import editingProduct from './editingProduct';

const appReducers=combineReducers({
    products,
    editingProduct
});

export default appReducers;