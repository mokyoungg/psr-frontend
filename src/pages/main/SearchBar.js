import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SearchBar = ({ searchSet, doSearch, setFile, fileSearch }) => {
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
          <PickImg
            onClick={() => doSearch()}
            src="https://www.weardex.com/images/cOLOR_white.png"
          />
        </PickWrap>
        <CameraWrap>
          <CameraImg
            onClick={() => fileSearch()}
            src="https://www.weardex.com/images/cAMERA_white.png"
            alt="carmera_icon"
          />
          <File
            type="file"
            accept="image/jpeg, image/png"
            onChange={setFile}
          ></File>
        </CameraWrap>
      </SearchWrap>
    </Wrap>
  );
};

export default SearchBar;

//style

const Wrap = styled.div`
  margin-top: 0;
  width: 100%;
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
  @media only screen and (max-width: 359px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 360px) and (max-width: 479px) {
    font-size: 12px;
    font-weight: bold;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
  }
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
  position: relative;
  cursor: pointer;
`;

const CameraImg = styled.img`
  color: #fff;
  height: 30px;
  cursor: pointer;
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
  cursor: pointer;
`;

const PickImg = styled.img`
  color: #fff;
  margin: 3px;
  height: 24px;
  cursor: pointer;
`;

const File = styled.input`
  height: 100%;
  position: absolute;
  left: 1%;

  width: 100%;
  opacity: 0;
  cursor: pointer;
`;
