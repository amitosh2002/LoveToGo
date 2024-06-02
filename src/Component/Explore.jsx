import React from "react";
import styled from "styled-components";

import Sort from "./Sort";
import ProductList from "./ProductList";

const Explore = () => {
  return (
    <Wrapper>
      <div className="container-full">
        <div className="filter-section-container">filter</div>

        <div className="product-view-container">
          <div className="sort-view">
            <Sort />
          </div>
          <div className="product-view">
            <ProductList />
          </div>
        </div>
      </div>

      {/* <GridView /> */}
      {/* <ListView /> */}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .product-view-container {
    display: flex;
    flex-direction: column;
  }
  .container-full {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  /* .product-view {
    width: 100%;
  } */
`;

export default Explore;
