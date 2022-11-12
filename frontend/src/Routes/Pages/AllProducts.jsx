import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./productpage.css"
import { Box, Image, Text } from '@chakra-ui/react';
import ProductBox from '../../Components/PoductComponents/ProductBox';
const AllProducts = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
      getdata();
    }, []);

    const getdata = () => {
      axios
        .get("http://localhost:8000/allproducts")
        .then((res) => {
            setdata(res.data);
       
        })
        .catch((err) => {
          console.log(err);
        });
        console.log(data)
    };

  return (
    <div className='productpage'>
<div>
    Side block
</div>
        <div  className='productpage_div1'>

        {data?.map((pro) =>
<ProductBox data={pro}/>
  )}
        </div>
   
    </div>
  )
}

export default AllProducts