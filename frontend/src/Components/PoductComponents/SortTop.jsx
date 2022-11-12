import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'
import "./productcompo.css"
const SortTop = () => {
  return (
    <>
<form > 
  <select placeholder='Sort Product By' className='sortproductform'>
    <option>Sort Products By </option>
    <option>High - Low</option>
    <option>Low - High</option>
    <option>A - Z</option>
    <option>Z - A</option>
  </select>
  </form>


    </>
  )
}

export default SortTop