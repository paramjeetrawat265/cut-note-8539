import {Button} from "@mui/material";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import stylesc from "styled-components";
import {GetCartData} from "../../Redux/Cart/action.cart";
import {accesData} from "../../Utils/appLocalStorage";
const {REACT_APP_API_URL} = process.env;

const Cart = () => {
  const [count, setCount] = useState(1);
  const [quantity, setqty] = useState(1);
  const [cartdata, setcartdata] = useState([]);
  const seletctqty = (e) => {
    setqty(e.target.value);
  };
  const GetCartDatamy = async () => {
    const token = accesData("token");
    try {
      const response = await axios.get(`${REACT_APP_API_URL}cart/usercart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setcartdata(response.data.products);
    } catch (err) {}
  };
  let amount =
    cartdata && cartdata.reduce((acc, el) => acc + el.quantity * el.price, 0);
  useEffect(() => {
    GetCartDatamy();
  }, []);

  return (
    <CartContainer>
      <div className="container">
        <div className="leftContainer">
          <div className="shopContainer">
            {cartdata && cartdata.length !== 0 && (
              <div>
                <table>
                  <tr className="tableRow">
                    <td className="item">ITEM</td>
                    <td className="qty">QTY</td>
                    <td className="price">PRICE</td>
                  </tr>
                  {cartdata &&
                    cartdata.map((ele, index) => (
                      <tr key={index} className="tableRow">
                        <td className="item">
                          <div className="prodDetail">
                            <div className="prodImage">
                              <img src={ele.image} />
                            </div>
                            <div className="details">
                              <h3>{ele.name}</h3>
                              <p>Item:{ele.id ? ele.id : "BE996"}</p>
                              <p>color:{ele.color ? ele.color : "Black"}</p>
                              <p>size:{ele.size ? ele.size : "Classic"}</p>
                              <br></br>
                              <br></br>
                              <div className="options">
                                <button>Remove</button>
                                <button>Save_Later</button>
                                <button>Edit</button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="qty">
                          <div className={"counterContainer"}>
                            <select name="" id="" onChange={seletctqty}>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </td>
                        <td className="price">
                          <p>
                            <strike>INR:{ele.price * 2}</strike>
                          </p>
                          <p>INR:{ele.price * count}</p>
                        </td>
                      </tr>
                    ))}
                </table>
              </div>
            )}
          </div>
        </div>
        {cartdata !== 0 && (
          <div className="rightContainer">
            <div>
              <p className="Rightsidep1">Item Subtotal</p>
              <p className="Rightsidep2">{amount}</p>
              <Button className="placeordertbtn">Place Order</Button>
            </div>
          </div>
        )}
      </div>
    </CartContainer>
  );
};

export default Cart;
const CartContainer = stylesc.div`
  
width:100%;
  padding:0px;
  margin:0px;
  background-color:
  #f8f8f8;

  .prodImage{
    width:100px;
    height:130px;
  }

  img{
    width:100%;
    height:100%;
    
  }

  .container{
      width:1000px;
      margin:auto;
      margin-top:50px;
      display:flex;
      justify-content:space-between;
  }

  .leftContainer{
      width:65%;
  }

  .rightContainer{
      width:35%;
      background-color:white;
      border:1px solid black;
  }
.Rightsidep1{
font-size:20px;
font-weight:bold;
}
  .shopContainer,
  .savedContainer{
  }
  
  .shopHeading,
  .savedHeading{
      margin-top:40px;
      letter-spacing:2px;
      padding:10px;
      background-color:white;
      text-align:left;
      font-size:26px;
      font-weight:700;
  }

  .cartContainer,
  .savedForContainer{
      margin-top:8px;
      background-color:white;
      padding:60px 10px;
      font-size:18px;
      font-family:700;
  }

  .prodDetail{
      display:flex;
  }


  .details{
      text-align:left;
      margin-bottom:0px;
  }
  .details p{
      margin-top:-20px;
  }

  th{
    color:gray;
    font-size:14px;
    font-weight:600;
  }

  .options{
      margin-top:-50px;
      display:flex;
      gap:3px;
  }
  .options>button{
      border:none;
      font-size:12px;
      font-weight:600;
      background-color:white;
      cursor:pointer;
  }  

  table{
      margin-top:8px;
  }

  .tableRow{
      padding-top:5px;
      background-color:white;
  }

  .counterContainer{
      border:1px solid gray;
      margin-top:-30px;
  }
  .counterContainer button{
      border:none;
      background-color:white;
  }

  .item{
      width:380px;
  }

  .qty{
      width:100px;
  }

  .price{
    width:100px;
  }

  .price p{
    margin-top:-20px;
  }
.placeordertbtn{
  width:100%;
  backgraund-color:black;
 
}
`;
