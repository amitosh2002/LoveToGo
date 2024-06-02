import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import styled from "styled-components";
const ProductList = () => {
  return (
    <Wrapper>
      <div className="product">
        <ListView />

        <GridView />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* .product {
    width: 400%;
    height: 100%;
  } */
`;
export default ProductList;
