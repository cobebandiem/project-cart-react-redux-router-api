import * as Types from './../constants/ActionTypes';
var initialState={};

const editingProduct=(state=initialState,action)=>{
    switch(action.type){
        case Types.UPDATE_PRODUCT:{
            state=action.product;
            return state;
        }
        default: return state;
    }
}
export default editingProduct;