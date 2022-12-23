import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import stylesc from "styled-components";
import { GetCartData } from "../../Redux/Cart/action.cart";

const Cart = () => {
  // const [cartLength, setCartLength] = useState(/1);
  // const [saved, setSaved] = useState([]);//
  const [count, setCount] = useState(1);


  const handleCount = (num) => {
    setCount((pre) => pre + num);
  };
  const dispatch = useDispatch();

  const {data} = useSelector((store) => store.cart);
console.log(data && data.products)

const cartdata =data && data.products
  useEffect(() => {
    dispatch(GetCartData())

  }, [count]);

  return (
    <CartContainer>
      <div className="container">
        <div className="leftContainer">
          <div className="shopContainer">
            <div className="shopHeading">Shopping Bag({cartdata.length})</div>
            {cartdata.length === 0 && (
              <div className="cartContainer">Your Shopping Bag is Empty</div>
            )}
            {cartdata.length !== 0 && (
              <div>
                <table>
                  <tr className="tableRow">
                    <td className="item">ITEM</td>
                    <td className="qty">QTY</td>
                    <td className="price">PRICE</td>
                  </tr>
                  {cartdata.map((ele, index) => (
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
                          <button
                            disabled={count === 1}
                            onClick={() => handleCount(-1)}
                          >
                            -
                          </button>
                          <button>{count}</button>
                          <button onClick={() => handleCount(1)}>+</button>
                        </div>
                      </td>
                      <td className="price">
                        {/* {setTotalAmt(ele.price*count)} */}
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
          {/* <div className="savedContainer">
            <div className="savedHeading">Saved For Later({cartdata.length})</div>
            {cartdata.length === 0 && (
              <div className="savedForContainer">
                Your Saved For Later is Empty
              </div>
            )}
          </div> */}
        </div>
        {cartdata !== 0 && (
          <div className="rightContainer">
            <div>
              <p>Item Subtotal</p>
              <p></p>
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
      border:2px solid red;
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

`;
