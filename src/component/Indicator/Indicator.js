import React, { Component, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Indicator = ({ load }) => {
  console.log("받았어요 :", load);
  return <Wrap load={load}></Wrap>;
};

export default Indicator;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const Wrap = styled.div`
  display: ${(props) => (props.load === true ? `block` : `none`)}
  width: 80px;
  height: 80px;
  display: none;
  border: 2px solid #f3f3f3;
  border-top: 3px solid #f25a41;
  border-radius: 100%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  animation: ${spin} 1s infinite linear;
`;
