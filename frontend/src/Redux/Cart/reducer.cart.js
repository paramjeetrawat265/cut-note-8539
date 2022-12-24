import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCESS } from "./type.cart"


let initialstate={
    loading:false,
    error:false,
    data:[]
    // cartTotal:0
}

export const CartReducer=(state=initialstate,{type,payload})=>{
    switch (type){
case GET_CART_LOADING:{
    return {
...state,
loading:true,
error:false
    }
}

case GET_CART_SUCESS:{
    return {
        ...state,
        loading:false,
        error:false,
        data:payload,
       
    }
 
}
case GET_CART_ERROR:{
    return {
        ...state,
        loading:false,
        error:true
    }
}        
        default:{
            return state
            
        }
    }
}