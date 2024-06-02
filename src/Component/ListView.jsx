import React from "react";
import data from "../Data/Data";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SingleProduct from "./SingleProduct";
const ListView = () => {
  return (
    <Wrapper>
      <div className="container">
        {data.map((place, id2) => {
          const { name, image, time, id } = place;
          return (
            <div className="" key={id2}>
              <div className="card" key={id2}>
                <img src={image} alt="" />
                <div className="info">
                  <ul>
                    <li>
                      <h3>{name}</h3>
                    </li>
                    <li>{time}</li>
                  </ul>
                  <NavLink to={`/detail/${id}`}>
                    <button> View Detail!</button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    width: 400%;
  }
  .card {
    display: flex;
    flex-direction: row;
    /* justify-content: space-bet; */
    width: 50%;
    /* background-color: #edf2f4; */
    /* background-color: #cbf3f0d5; */
    background-color: #2ec4b5ae;
    border-radius: 20px;
    margin: 12px;
  }
  img {
    height: 185px;
    width: 250px;
  }
  .info {
    position: relative;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    left: 20%;
  }
  button {
    padding: 5px;
    background-color: blue;
    height: 60px;
    width: 110px;
    border-radius: 8px;
    margin: 8px;
  }
`;
export default ListView;
