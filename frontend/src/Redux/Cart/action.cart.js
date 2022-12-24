import axios from "axios";
import {accesData} from "../../Utils/appLocalStorage";
import {GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCESS} from "./type.cart";

const {REACT_APP_API_URL} = process.env;

export const Additemtocart = (payloadata) => async (dispatch) => {
  dispatch({type: GET_CART_LOADING});
  const token = accesData("token");
  try {
    let response = await axios.post(
      `${REACT_APP_API_URL}cart/addtocart`,
      payloadata,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type: GET_CART_SUCESS, payload: response.data});
    return response.data;
  } catch (e) {
    dispatch({type: GET_CART_ERROR});
  }
};


export const GetCartData = () => async (dispatch) => {
  dispatch({
    type: GET_CART_LOADING,
  });
 const token=accesData("token")

  try {
    const response = await axios.get(`${REACT_APP_API_URL}cart/usercart`,  {
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });
console.log(response)
    dispatch({
      type: GET_CART_SUCESS,
      payload: response.data,
      
    });
  } catch (err) {
    dispatch({
      type: GET_CART_ERROR,
    });
  }
};