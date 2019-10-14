import * as Types from './../constants/ActionTypes';

var initialState=[];

const findIndex=(id,products)=>{
    var result=-1;
    products.forEach((product,index)=>{
      if(product.id===id){
        result=index;
        return result;
      }
    });
    return result;
  }

const products=(state=initialState,action)=>{
    var index=-1;
    switch(action.type){
        case Types.FETCH_PRODUCTS:{
            state=action.products;
            return [...state];
        }
        case Types.DELETE_PRODUCT:{
            index=findIndex(action.id,state);
            let stateFake=[...state];
            stateFake.splice(index,1);
            state=stateFake;
            return[...state];
        }
        case Types.ADD_PRODUCT:{
          state.push(action.product);
          return [...state];
        }
        case Types.UPDATE_PRODUCT:{
          index=findIndex(action.product.id,state);
          let stateFake=[...state];
          stateFake[index]=action.product;
          state=stateFake;
          return [...state];
        }
        default: return [...state];
    }
}

export default products;