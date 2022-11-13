import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./productpage.css"
import { Box, Image, Text } from '@chakra-ui/react';
import ProductBox from '../../Components/PoductComponents/ProductBox';
import { useDispatch, useSelector } from 'react-redux';
import { getmensproduct } from '../../Redux/Products/action.product';
import HaveAquestion from '../../Components/PoductComponents/HaveAquestion';

const MensProduct = () => {
  const { loading, data } = useSelector((store) => store.product)
  const { users, isAdmin, token } = useSelector((store) => (store.AuthReducer));
  console.log(users,token);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getmensproduct())
  }, []);
  return (
    <>
      <HaveAquestion />
      <h1 shop_title>SHOP ALL MEN'S CLOTHING</h1>
      <div className='productpage'>
        <div>
          Side block
        </div>
        <div className='productpage_div1'>
          {data?.map((pro) =>
            <ProductBox data={pro} />
          )}
        </div>
      </div>
    </>
  )
}

export default MensProduct










