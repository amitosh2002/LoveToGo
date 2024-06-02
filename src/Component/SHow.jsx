import React, { useState } from "react";
import data from "../Data/Data";
import styled from "styled-components";
import heroSectionImage from "../picture/hero-section-img.png";
import heartOfIndia from "../picture/heart-of-india.png";
import taxi from "../picture/taxi-1.png";
import namste from "../picture/namaste_painting.jpg";
import namste2 from "../picture/namaste_1.png";
const SHow = () => {
  //   const [place, SetPlace] = useState(data);
  return (
    <Wrapper>
      {/* --------------------------------------hero setion----------------------------------------- */}

      <div className="hero-section ">
        <img className=" hero-section-img" src={heroSectionImage} alt="" />
        <div className="para">
          <p>
            Pack your senses for a wild ride! India awaits with vibrant colors,
            aromatic spices,
            <br /> and the clanging rhythm of a bustling life. Embrace the
            unexpected, wander ancient temples,
            <br /> and get swept up in the warm hospitality. This adventure will
            leave its mark on your soul.
          </p>
        </div>
      </div>

      {/* --------------------------------------hero setion----------------------------------------- */}
      {/* -----------------------------------------------------card---------------------------------  */}
      <h2>Must Visit</h2>

      <div className="container">
        <div
          className="card-body"
          style={{ placeContent: "center", placeItems: "center" }}
        >
          {data.map((place, id) => {
            const { name, image } = place;
            return (
              <div className="gap" key={id}>
                <div className="card ">
                  <img className="img-card" src={image} alt="" />
                  <ul>
                    <li>
                      <p>{name}</p>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  p {
    word-break: break-all;
    margin: 10px;
    font-size: large;
    /* font-weight: 70; */
    font-family: "Sevillana", cursive;
    /* font-family: cursive; */
    font-weight: 400;
    font-style: normal;
  }
  .hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 35px;
    margin-right: 35px;
    /* margin-top: 35px; */
    /* background-color: #00000062; */
  }
  .hero-section-img {
    height: 400px;
    width: auto;
  }

  .carousel-inner {
    height: 350px;
    width: 650px;
  }
  #carouselExampleInterval {
    /* display: flex;
    align-items: center; */
    width: 650px;
    height: 350px;
  }
  .caresol {
    display: flex;
    justify-content: center;
  }

  .d-block {
    object-fit: cover;
    border-radius: 12px;
  }
  .container {
    display: flex;
    justify-content: center;
    /* margin-top: 15px; */
  }
  .card-body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* gap: 0.5rem; */
    margin: 5rem;
    /* background-color: white; */
  }
  .gap {
    /* display: flex;
    justify-content: center; */
    margin: 1.8;
  }

  li {
    text-decoration: none;
    /* padding: 5px; */
    /* margin: 1.2rem; */
    /* gap: 2; */
    border-radius: 5px;
    list-style-type: none;
  }

  .card {
    /* height: 300px;
    width: 300px; */
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: #2ec4b5ae;

    margin: 15px;
    /* position: relative; */
  }
  .card:hover {
    transform: scale(1.2);
    row-gap: 2rem;
    background-color: white;
    color: black;
  }

  .img-card {
    width: 88%;
    height: 91%;
    margin: 1.2rem;
    border-radius: 10px;
  }
`;

export default SHow;
