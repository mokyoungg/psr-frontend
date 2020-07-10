import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SearchBox = ({ res, coordi, img, preview, boxview }) => {
  console.log("coordi입니다 :", coordi);
  console.log("res입니다 :", res);
  return (
    <Wrap boxview={boxview}>
      <Hidden>Your Choose</Hidden>
      <ImgContainer>
        <Img src={img || preview} alt="img" />
        {/* {img || preview}*/}
        {res.map((res, index) => {
          console.log("먼길오셨습니다 :", res.coordinates[0].x);
          return (
            <Mark
              left={res.coordinates[0].x}
              top={res.coordinates[0].y}
              width={res.coordinates[1].x - res.coordinates[0].x}
              height={res.coordinates[3].y - res.coordinates[0].y}
            >
              <MarkNum>{index + 1}</MarkNum>
            </Mark>
          );
        })}
        {/*<Mark></Mark>
        <Mark2></Mark2>*/}
      </ImgContainer>
      <BtnContainer>
        <Span>Re-crop & Search</Span>
      </BtnContainer>
    </Wrap>
  );
};

export default SearchBox;

const Wrap = styled.div`
  margin-bottom: 10px;
  display: block;
  display: ${(props) => (props.boxview ? "block" : "none")};
  @media only screen and (max-width: 479px) {
    margin-top: 2%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    margin-top: 2%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
  }
`;

const Hidden = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 2%;
  letter-spacing: 1px;
  @media only screen and (max-width: 479px) {
    display: block;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: block;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    display: none;
  }
  @media only screen and (min-width: 1201px) {
    display: none;
  }
`;
// display: ${(props) => (props.boxview ? "block" : "none")};
const ImgContainer = styled.div`
  width: 100%;
  height: 330px;
  position: relative;
  background-color: rgb(228, 228, 228);
  border: none;
  margin: 0px;
  padding: 0px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 5;
`;

const BtnContainer = styled.div`
  text-align: left;
  padding-top: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  @media only screen and (max-width: 479px) {
    display: none;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
  }
`;

const Span = styled.span`
  display: block;
  text-align: center;
  padding: 5px 10px;
  border: 1px solid #333;
  transition: background-color ease 0.3s;
`;

const Mark = styled.div`
  width: ${(props) => props.width * 100}%;
  height: ${(props) => props.height * 100}%;
  position: absolute;
  left: ${(props) => props.left * 100}%;
  top: ${(props) => props.top * 100}%;
  z-index: 7;
  font-size: 25px;
  color: #1696cf;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #1696cf;
    background-color: black;
    opacity: 0.5;
  }
`;
// border: 1px solid red;

const MarkNum = styled.div``;

const Mark2 = styled.div`
  width: 33%;
  height: 30%;
  background: yellow;
  position: absolute;
  left: 34%;
  top: 23%;
  z-index: 7;
`;

/*
const Mark3 = styled.div`
  width: 30px;
  height: 30px;
  background: green;
  position: absolute;
  left: 64.63615px;
  top: 89.78208px;
`;

const Mark4 = styled.div`
  width: 30px;
  height: 30px;
  background: blue;
  position: absolute;
  left: 37.842676px;
  top: 89.78208px;
`;
*/
