import * as Types from './../constants/ActionTypes';
import apiCaller from './../utils/apiCaller';

export const actFetchProductsRequest=()=>{
    return (dispatch)=>{
        return apiCaller('products','GET',null).then(res=>{
            dispatch(actFetchProducts(res.data));
        })
    };
}

export const actFetchProducts=(products)=>{
    return {
        type:Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest=(id)=>{
    return (dispatch)=>{
        return apiCaller(`products/${id}`,'DELETE',null).then(res=>{
            dispatch(actDeleteProduct(id));
        })
    };
}

export const actDeleteProduct=(id)=>{
    return {
        type:Types.DELETE_PRODUCT,
        id
    }
}

export const actEditingProductRequest=(id)=>{
    return (dispatch)=>{
        return apiCaller(`products/${id}`,'GET',null)
        .then(res=>{
            dispatch(actEditingProduct(res.data));
        })
    }
}
export const actEditingProduct=(product)=>{
    return {
        type:Types.UPDATE_PRODUCT,
        product
    }
}

export const actAddProductRequest=(product)=>{
    return (dispatch)=>{
        if(product.id){
            return apiCaller(`products/${product.id}`,'PUT',{
                name:product.txtName,
                price:product.txtPrice,
                chkbStatus:product.chkbStatus
            })
            .then(res=>{
                dispatch(actUpdateProduct(res.data));
            })
        }else{
            return apiCaller('products','POST',{
                name:product.txtName,
                price:product.txtPrice,
                chkbStatus:product.chkbStatus
            })
            .then(res=>{
                dispatch(actAddProduct(res.data));
            })
        }
    }
}

export const actUpdateProduct=(product)=>{
    return {
        type:Types.UPDATE_PRODUCT,
        product
    }
}

export const actAddProduct=(product)=>{
    return {
        type:Types.ADD_PRODUCT,
        product
    }
}