import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SearchBox = ({ res, coordi, img, preview, boxview, handleData }) => {
  const [view, setView] = useState(true);
  const [viewNum, setNum] = useState(0);
  const [fixNum, setFix] = useState(0);
  const [fixView, setFview] = useState(true);

  const handleView = (index) => {
    setView(false);
    console.log("index :", index + 1);
    setNum(index + 1);
  };

  const handleView2 = () => {
    setView(true);
    setNum(0);
  };

  const onlyView = (index) => {
    setFview(false);
    setFix(index + 1);
  };

  const reset = () => {
    setView(true);
    setNum(0);
    setFix(0);
    setFview(true);
  };


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
              onMouseEnter={() => handleView(index)}
              onMouseLeave={() => handleView2()}
              onClick={() => {
                handleData(index);
                onlyView(index);
              }}
              left={res.coordinates[0].x}
              top={res.coordinates[0].y}
              width={res.coordinates[1].x - res.coordinates[0].x}
              height={res.coordinates[3].y - res.coordinates[0].y}
              fixView={fixView}
              index={index}
              fixNum={fixNum}
            >
              <MarkNum
                view={view}
                index={index}
                viewNum={viewNum}
                fixView={fixView}
              >
                {index + 1}
              </MarkNum>
            </Mark>
          );
        })}
        {/*<Mark></Mark>
        <Mark2></Mark2>*/}
      </ImgContainer>
      <BtnContainer onClick={() => reset()}>
        <Span>Reset</Span>
      </BtnContainer>
    </Wrap>
  );
};

export default SearchBox;

const Wrap = styled.div`
  margin-top: 4%;
  display: block;
  display: ${(props) => (props.boxview ? "block" : "none")};
  @media only screen and (max-width: 479px) {
    margin-top: 2%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    margin-top: 2%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 11%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
  margin-top: 8%;
  }
`;
// display: ${(props) => (props.boxview ? "block" : "none")};
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
  @media only screen and (max-width: 479px) {
    margin-top: 2%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    margin-top: 2%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    height: 200px;
 }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    height: 300px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 5;
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

const BtnContainer = styled.div`
  text-align: left;
  padding-top: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  @media only screen and (max-width: 479px) {
    
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${(props) =>
    props.fixView === false && props.index + 1 === props.fixNum
      ? `1px solid #1696cf`
      : `none`};
  background-color: ${(props) =>
    props.fixView === false && props.index + 1 === props.fixNum
      ? `black`
      : `transparent`};
  opacity: ${(props) =>
    props.fixView === false && props.index + 1 === props.fixNum ? `0.5` : `1`};
  &:hover {
    border: 1px solid #1696cf;
    background-color: black;
    opacity: 0.5;
  }
`;
// border: 1px solid red;

const MarkNum = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #1696c1;
  background: transparent;
  border-radius: 50px;
  font-size: 25px;
  color: #1696cf;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  display: ${(props) =>
    (props.view === false && props.index + 1 === props.viewNum) ||
    props.fixView === false
      ? "none"
      : "block"};
`;

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
