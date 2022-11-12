import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./productcompo.css"
const ProductBox = (pro) => {
 const  {image,name,price,_id}=pro.data
    // console.log(pro)
  return (
    <div>
        
    <Box className='product_box' >
    <Link to={`/alldata/${_id}`}>
    <Box className='imgbox' >
    <Image className='productimg1' src={image} alt={image} />
    </Box>
    <Box className='infodata' >
        <Text>{name}</Text>
        <Text>INR {price}</Text>
    </Box>
    </Link>
    </Box>
    </div>
  )
}
export default ProductBox