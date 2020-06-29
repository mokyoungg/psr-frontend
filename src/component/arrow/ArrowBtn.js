import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Icon from "../../image/icon.png";

const ArrowBtn = ({ arrowrotate, handleRotate }) => {
  //const [arrowrotate, setRotate] = useState(false);
  //const handleRotate = (e) => {
  //  setRotate(!arrowrotate);
  //};
  console.log("rote :", arrowrotate);
  return (
    <ArrowWrap onClick={() => handleRotate()} arrowrotate={arrowrotate}>
      <Arrow>
        <AIcon src={Icon} arrowrotate={arrowrotate} />
      </Arrow>
    </ArrowWrap>
  );
};

export default ArrowBtn;

const ArrowWrap = styled.span`
  padding-right: 5px;
  float: right;
  vertical-align: middle;
  line-height: 40px;
  font-size: 12px;
  background: ${(props) => (props.arrowrotate === true ? "yellow" : "red")};
`;

//${(props) => (props.rotate === true ? "yellow" : "red")};

const Arrow = styled.span`
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-weight: 800;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  margin-left: 20px;
`;

const AIcon = styled.img`
  width: 12px;
  height: 12px;
  transform: rotate(270deg);
  transform: ${(props) =>
    props.arrowrotate === true ? `rotate(90deg)` : `rotate(270deg)`};
`;
