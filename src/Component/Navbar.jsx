import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../picture/india_logo.png";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav">
        <ul>
          <li>
            <img src={logo} alt="" height={50} width={70} />
          </li>
          <li>
            <NavLink
              to="/home"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              style={{ textDecoration: "none", color: "#fdfdfd" }}
            >
              <span>Explore</span>
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="#">Exotic</NavLink> */}
            Exotic
          </li>
          <li>
            {/* <NavLink to="#" style={{ color: "black" }}> */}
            Contact
            {/* </NavLink> */}
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .nav {
    /* background-image: url("../picture/namaste_1.png");
    object-fit: contain; */
    background-color: #0d0c0cc8;
    color: white;
    /* height: 150px; */
  }
  ul {
    display: flex;
    flex-direction: column-reverses;
    text-decoration: none;
    flex-wrap: wrap-reverse;
    /* background-color: black; */
    color: #fffafa;
  }
  li {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 1.2rem;
    padding: 3px;
    gap: 2;
    border-radius: 5px;
    list-style-type: none;
    color: #fefbfb;
    font-size: larger;
    font-weight: 70;
  }
  li:hover {
    background-color: #2ec4b5ae;
    color: #f9f7f7;
    transform: scale(1.3);
  }
`;

export default Navbar;
