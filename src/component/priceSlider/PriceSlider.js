import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "94%",
    margin: "3% auto",
  },
});

function valuetext(value) {
  return `${value}원`;
}

const PriceSlider = ({ price, minP, maxP, handlePrice, setRen, ren }) => {
  const classes = useStyles();

  const handleClick = () => {
    setRen(!ren);
  };

  const numberFormat = (num) => {
    if (num > 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "0";
    }
  };

  return (
    <Wrap>
      <div className={classes.root}>
      <TextWrap>
          <Text>가격대</Text>
          <PriceInfo>
            {numberFormat(price[0])}원 ~ {numberFormat(price[1])}원
          </PriceInfo>
        </TextWrap>
        <SliderWrap>
          <Slider
            value={price}
            defaultValue={[minP, maxP]}
            onChange={handlePrice}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            max={maxP}
            min={minP}
            step="10000"
          />
        </SliderWrap>
        <Info>
          <div>{numberFormat(minP)}원</div><div>{numberFormat(maxP)}원</div>
        </Info>
      </div>
      <BtnContainer onClick={() => handleClick()}>
        <Span>제품보기</Span>
      </BtnContainer>
    </Wrap>
  );
};

export default PriceSlider;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextWrap = styled.div`
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 479px) {
    width: 100%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
 
`;

const PriceInfo = styled.span`
  margin-left: 3%;
  font-size: 12px;
  font-weight: normal;
  color: blue;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 479px) {
    width: 100%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 0;
    font-size: 11px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-left: 0;
  }
`;

const SliderWrap = styled.div``;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: gray;
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
