import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SearchBar = ({ searchSet, doSearch }) => {
  return (
    <Wrap>
      <TitleWrap>
        <Title>Product Browsing</Title>
      </TitleWrap>
      <SearchWrap>
        <Search
          onChange={searchSet}
          type="text"
          placeholder="Search by image URL or Upload Image"
        />
        <PickWrap>
          <PickImg src="https://www.weardex.com/images/cOLOR_white.png" />
        </PickWrap>
        <CameraWrap>
          <CameraImg
            onClick={() => doSearch()}
            src="https://www.weardex.com/images/cAMERA_white.png"
            alt="carmera_icon"
          />
        </CameraWrap>
      </SearchWrap>
    </Wrap>
  );
};

export default SearchBar;

//style

const Wrap = styled.div`
  margin-top: 0;
`;

const TitleWrap = styled.div``;

const Title = styled.h2`
  text-align: left;
  font-weight: 600;
  font-size: 26px;
  margin: 0 0 -3px;
  letter-spacing: 1px;
`;

const SearchWrap = styled.div`
  font-size: 15px;
  border: 2px solid #000;
  height: 40px;
  width: 100%;
  margin-bottom: 12px;
  transition: all 0.2s;
  margin-top: 10px;
`;

const Search = styled.input`
  height: 36px;
  outline: 0;
  border: none;
  width: calc(100% - 100px);
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: -internal-light-dark-color(
    rgb(255, 255, 255),
    rgb(59, 59, 59)
  );
  -webkit-rtl-ordering: logical;
  cursor: text;
  padding-left: 10px;
  color: #000;
`;

const CameraWrap = styled.div`
  float: right;
  background-color: #000;
  color: #fff;
  height: 36px;
  transition: all 0.3s;
  border-left: 2px solid #000;
  width: 50px;
  padding-left: 6px;
  padding-top: 3px;
  color: #fff;
`;

const CameraImg = styled.img`
  color: #fff;
  height: 30px;
`;

const PickWrap = styled.div`
  float: right;
  background-color: #000;
  color: #fff;
  height: 36px;
  transition: all 0.3s;
  border-left: 2px solid #000;
  width: 50px;
  padding-left: 6px;
  padding-top: 3px;
  color: #fff;
`;

const PickImg = styled.img`
  color: #fff;
  margin: 3px;
  height: 24px;
`;
