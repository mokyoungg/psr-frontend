import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SearchBox = ({ img, preview, boxview }) => {
  return (
    <Wrap boxview={boxview}>
      <ImgContainer>
        <Img src={img || preview} alt="img" />
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
`;

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
`;

const BtnContainer = styled.div`
  text-align: left;
  padding-top: 10px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Span = styled.span`
  display: block;
  text-align: center;
  padding: 5px 10px;
  border: 1px solid #333;
  transition: background-color ease 0.3s;
`;
