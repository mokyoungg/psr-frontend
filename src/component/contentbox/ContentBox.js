import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const ContentBox = ({ data }) => {
  return (
    <Wrap>
      <ContentWrap>
        <ProductWrap>
          <ImgWrap>
            <Img src={data.image} alt="product" />
          </ImgWrap>
        </ProductWrap>
        <InfoWrap>
          <BrandInfo>{data.brand}</BrandInfo>
          <Similar>
            <SimilarIcon
              src="https://www.weardex.com/images/similar-normal.png"
              alt="icon"
            />
            <SimilarText>Similar</SimilarText>
          </Similar>
          <ProductName>{data.name}</ProductName>
          <Price>{data.price}</Price>
        </InfoWrap>
      </ContentWrap>
    </Wrap>
  );
};

export default ContentBox;

//style

const Wrap = styled.div`
  position: relative;
  min-height: 1px;
  font-size: 15px;
  color: #333;
  margin: 20px 10px;
  width: 200px;
`;

const ContentWrap = styled.div`
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const ProductWrap = styled.div`
  position: relative;
  content: "";
  padding-top: 155%;
  display: block;
  border-radius: 3px;
`;
//background: #dfdfdf;

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  max-height: 100%;
  display: inline-block;
  vertical-align: middle;
  border: 0;
  border-style: none;
  width: 100%;
  height: 90%;
  max-width: inherit;
  :hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.5);
  }
`;

const InfoWrap = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #333;
`;

const BrandInfo = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 60%;
  height: 18px;
  float: left;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  display: inline-block;
  letter-spacing: 0.5px;
  margin-bottom: 3px;
`;

const Similar = styled.div`
  width: 40%;
  height: 20px;
  color: #999;
  float: left;
  cursor: pointer;
  font-size: 12px;
  font-weight: 300;
  text-align: right;
  line-height: 18px;
  display: inline-block;
`;

const SimilarIcon = styled.img`
  max-width: 40%;
  max-height: 70%;
  margin-top: -3px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  font-size: 12px;
  font-weight: 300;
  text-align: right;
  line-height: 18px;
  color: #999;
`;

const SimilarText = styled.span`
  cursor: pointer;
  font-size: 12px;
  font-weight: 300;
  text-align: right;
  line-height: 18px;
  color: #999;
`;

const ProductName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  clear: left;
  max-width: 80%;
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
  color: #777;
  letter-spacing: 0.5px;
`;

const Price = styled.div`
  visibility: visible;
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  color: #777;
`;
