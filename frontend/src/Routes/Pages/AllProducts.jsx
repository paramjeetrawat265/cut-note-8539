import React, {useEffect, useState} from "react";
import axios from "axios";
import "./productpage.css";
import {Box, Image, Spinner, Text} from "@chakra-ui/react";
import ProductBox from "../../Components/PoductComponents/ProductBox";
import {useDispatch, useSelector} from "react-redux";
import {getproduct} from "../../Redux/Products/action.product";
import HaveAquestion from "../../Components/PoductComponents/HaveAquestion";
import SortTop from "../../Components/PoductComponents/SortTop";
import { SearchBox } from "../../Components/PoductComponents/SearchBox";
const AllProducts = () => {
  const {loading, data} = useSelector((store) => store.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproduct());
  }, []);
  return (
    <>
      <HaveAquestion />
<SortTop/>

<SearchBox/>
      <div className="productpage">
        <div>Side block</div>
        <div className="productpage_div1">
          {loading ? (
            <Spinner
              className="loadingspinner"
              thickness="1px"
              speed="2.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xxl"
            />
          ) : (
            ""
          )}
          {data?.map((pro) => (
            <ProductBox data={pro} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
