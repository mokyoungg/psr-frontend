import React, { Component, useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";

export default class Indicator extends React.Component {
  //other logic
  render() {
    return (
      <Wrap>
        <Loader
          type="Grid"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  display: flex;
  z-index: 500;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`;
