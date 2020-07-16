import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/header/Header";
import SearchBar from "../main/SearchBar";
import { URL } from "../../Config";
import Slide from "../../component/slide/Slide";
import Indicator from "../../component/Indicator/Indicator";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Detail = ({ history, location }) => {
  const [loca, setLoca] = useState({});
  const [res, setRes] = useState([]);
  const [dataT, setTemp] = useState([]);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [ren, setRen] = useState(true);

  const makeData = (aaa) => {
    let result = [];
    for (let i = 0; i < aaa.length; i++) {
      result = result.concat(aaa[i]["product"]);
    }
    return result;
  };
  const handleRen = () => {
    setLoad(true);
    setRen(!ren);
  };

  const numberFormat = (num) => {
    if (num > 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "0";
    }
  };
  /*
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);*/

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    setLoca(location.state);
    fetch(`${URL}/image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img_url: location.state.imgUrl,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const useData = makeData(res.grouped_results);
        setData(useData);
        setTemp(useData);
        setRes(res.grouped_results);
      });
  }, [ren]);

  //src = {loca.imgUrl}
  return (
    <Wrap>
      <Header />
      {load ? (
        <Indicator />
      ) : (
        <Section>
          <ProductDetail>
            <ImgWrap>
              <ImgDetail src={loca.imgUrl} alt="상품이미지" />
            </ImgWrap>
            <InfoWrap>
              <Info>
                <Brand>Brand</Brand>
                <Name>Name : {loca.name}</Name>
                <Price>Price : {numberFormat(loca.price) + `원`}</Price>
                <PDetail>상품 상세정보</PDetail>
              </Info>
            </InfoWrap>
          </ProductDetail>
          <ProductRecom>
            <Title>You may also like</Title>
            <SlideWrap>
              <Slide handleRen={handleRen} data={data} />
            </SlideWrap>
          </ProductRecom>
        </Section>
      )}
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 479px) {
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    height: 100vh;
  }
`;

const Section = styled.div`
  margin-top: 64px;
  width: 77%;
  @media only screen and (max-width: 479px) {
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
  }
`;

const ProductDetail = styled.div`
  margin-bottom: 20px;
  display: flex;
  margin-top: 5%;
  height: 30%;
  @media only screen and (max-width: 479px) {
    flex-direction: column;
    height: auto;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
  }
`;

const ImgWrap = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 479px) {
    margin: auto;
    width: 70%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    margin: 0 auto;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 60%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 60%;
  }
  /* height: 300px; */
`;

const ImgDetail = styled.img`
  width: 60%;
  @media only screen and (max-width: 479px) {
    width: 100%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 60%;
  }
`;

const InfoWrap = styled.div`
  width: 70%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 479px) {
    margin: auto;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 40%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 40%;
  }
`;

const Info = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  font-size: 14px;
  color: #333;
  @media only screen and (max-width: 479px) {
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
  }
`;

const Brand = styled.div`
  font-size: 22px;
  padding-bottom: 8px;
  @media only screen and (max-width: 479px) {
    font-size: 15px;
  }
`;

const Name = styled.div`
  font-size: 18px;
  color: #555;
  padding-bottom: 5px;
  font-weight: 300;
  @media only screen and (max-width: 479px) {
    font-size: 12px;
  }
`;

const Price = styled.div`
  font-size: 18px;
  @media only screen and (max-width: 479px) {
    font-size: 12px;
  }
`;

const PDetail = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #555;
  padding-top: 10px;
  padding-bottom: 5px;
  @media only screen and (max-width: 479px) {
    font-size: 12px;
  }
`;

const ProductRecom = styled.div`
  padding: 15px 0 0;
  border-top: 1px solid #ccc;
  position: relative;
  display: flex;
  justify-content: center;
`;
//padding: 15px 0 0;

const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  position: absolute;
  top: -15px;
  left: 43%;
  background-color: #fff;
  width: auto;
  @media only screen and (max-width: 479px) {
    font-size: 20px;
    left: 24%;
    top: -3%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    left: 35%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    left: 40%;
  }
`;

const SlideWrap = styled.div`
  margin: 0 auto;
  padding: 0 5%;
  width: 110%;
  @media only screen and (max-width: 479px) {
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
  }
`;

const SlideContainer = styled.ul``;
/* cursor: grab;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 120px 50px 50px;
    text-align: left;
    white-space: nowrap;
    margin: 0;
    list-style: none;
    display: block;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px; */
