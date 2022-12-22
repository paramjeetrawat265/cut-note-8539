import axios from "axios";
import { accesData } from "../../Utils/appLocalStorage";
import { Baseurl } from "../../Utils/Url";
import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCESS } from "./type.cart";

// export const getcartitem=()=>async(dispatch)=>{
//     dispatch({type:GET_CART_LOADING})
// try{
// let response=await axios.get("")
// dispatch({type:GET_CART_SUCESS,payload:response.data})
// return response.data
// }catch(e){
//     dispatch({type:GET_CART_ERROR})
// }
// }


export const Additemtocart=(payload)=>async(dispatch)=>{
    dispatch({type:GET_CART_LOADING})
    const authorization=accesData("token")
try{
let response=await axios.post(`${Baseurl}`,payload)
dispatch({type:GET_CART_SUCESS,payload:response.data})
return response.data
}catch(e){
    dispatch({type:GET_CART_ERROR})
}
}


