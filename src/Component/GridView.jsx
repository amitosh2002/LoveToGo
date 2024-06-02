import React from "react";
import data from "../Data/Data";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const GridView = () => {
  return (
    <Wrapper>
      <div className="container">
        {data.map((place, id) => {
          const { name, image, dict, time, reach, ideal } = place;
          return (
            <div className="container" key={id}>
              <div className="card">
                <NavLink to={`/detail/${id}`}>
                  <img
                    src={image}
                    alt="Card image"
                    className="card-image"
                  ></img>
                </NavLink>
                <div className="card-text">{name}</div>
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
    /* justify-content: space-evenly; */
    flex: 0 0 33.33%;
    flex-wrap: wrap;
    margin-top: 10px;

    background-color: #796f6f67;

    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr; */
    /* place-items: center; */
  }
  .card-image:hover {
    transform: scale(1.2);
    border-style: solid;
    border-width: 6px;
    border-radius: 15px;
    /* border-color: #fffdfd, blue, rgb(82, 236, 51); */
    /* border-color: #e2760a #ffff #0000ff rgb(82, 236, 51); */
    animation: animate 2.5s ease infinite;
  }
  @keyframes animate {
    0% {
      border-color: #0000ff;
    }
    25% {
      border-color: #ffff;
    }
    50% {
      border-color: rgb(82, 236, 51);
    }
    100% {
      border-color: #e2760a;
    }
  }
  .card {
    position: relative; /* Make the card the reference point */
    width: 280px; /* Adjust width as needed */
    margin: 15px;
  }
  .card:hover {
    border-width: 20px;
    border-color: blue;
  }

  .card-image {
    width: 100%;
    height: 200px; /* Adjust height as needed */
    object-fit: cover; /* Scales image to fill container */
  }

  .card-text {
    position: absolute; /* Position text absolutely within card */
    top: 75%; /* Center vertically */
    left: 5%; /* Center horizontally */
    /* transform: translate(-50%, -50%);  */
    color: #fffdfd; /* Change text color for better contrast */
    text-shadow: 1px 1px 2px black; /* Optional: adds a shadow to the text */
    background-color: #403c3c;
    padding: 10px;
    border-radius: 10px;
  }
`;
export default GridView;
