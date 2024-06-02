import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

const Sort = () => {
  return (
    <Wrapper>
      <div className="page-view">
        <div className="search-container">
          {/* <span>{count}</span> */}

          <input className="search" type="text" placeholder="Search" />
          <span className="search-btn">
            <FaSearch
              size={38}
              style={{
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "5px",
                marginTop: "5px",
              }}
            />
          </span>
        </div>
        <div className="view">
          <BsGrid1X2Fill
            size={18}
            style={{
              margin: "5px",
              backgroundColor: "#2ec4b5f4",
              padding: "4.8px",
            }}
          />
          <FaThList
            size={18}
            style={{
              margin: "5px",
              backgroundColor: "#2ec4b5eb",
              padding: "4.8px",
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .page-view {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 70px 70px;
  }
  .view {
    display: flex;
    flex-direction: row;
  }
  .search-container {
    /* background-color: grey; */
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .search {
    height: 55px;
    width: 250px;
    border-radius: 10px;
    background-color: white;
    margin-right: 10px;
  }
`;
export default Sort;
