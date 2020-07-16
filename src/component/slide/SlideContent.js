import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const SlideContent = ({ handleRen, data }) => {
  const [dataD, setData] = useState({});
  const numberFormat = (num) => {
    if (num > 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "0";
    }
  };
  const dataHandler = () => {
    handleRen();
    setData(data);
  };

  console.log("dataD :", dataD);
  return (
    <Wrap onClick={() => dataHandler()}>
      <Link
        style={{ textDecoration: "none" }}
        to={{
          pathname: "/detail",
          state: {
            imgUrl: data.product_uri,
            name: data.product_name,
            price: data.price,
            label1: data.product_label1,
            label2: data.product_labe2,
            label3: data.product_label3,
          },
        }}
      >
        <ContentWrap>
          <ProductWrap>
            <ImgWrap>
              <Img src={data.product_uri || data.image} alt="product" />
            </ImgWrap>
          </ProductWrap>
          <InfoWrap>
            <BrandInfo>{data.brand}</BrandInfo>
            {/*
            <Similar>
              <SimilarIcon
                src="https://www.weardex.com/images/similar-normal.png"
                alt="icon"
              />
              <SimilarText>Similar</SimilarText>
            </Similar>*/}
            <ProductName>{data.product_name || data.name}</ProductName>
            <Price>{numberFormat(data.price) + `원`}</Price>
          </InfoWrap>
        </ContentWrap>
      </Link>
    </Wrap>
  );
};

export default SlideContent;

const Wrap = styled.div`
  position: relative;
  min-height: 1px;
  font-size: 15px;
  color: #333;
  margin: 20px auto;
  width: 200px;
  :hover {
    padding: -1px;
    border: 1px solid #1696cf;
  }
  @media only screen and (max-width: 479px) {
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 250px;
  }

`;

// transition: all 0.5s ease-in-out;

const ContentWrap = styled.div`
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
// transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

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
  display: inline-block;
  vertical-align: middle;
  border: 0;
  border-style: none;
  max-width: inherit;
  :hover {
    transition: all 0.3s ease-in-out;
  }
`;
//    transform: scale(1.5);
//max-height: 100%;

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
