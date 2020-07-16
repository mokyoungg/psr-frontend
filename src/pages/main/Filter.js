import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Icon from "../../image/icon.png";
import FilterBox from "../../component/filterbox/FilterBox";
import ArrowBtn from "../../component/arrow/ArrowBtn";
import PriceSlider from "../../component/priceSlider/PriceSlider";

const Filter = ({
  checked,
  handleCheck,
  check,
  setCheck,
  category,
  brand,
  data,
  value,
  price,
  minP,
  maxP,
  handlePrice,
  setRen,
  ren,
  gender,
  genderCheck,
}) => {
  const [arrowrotate, setRotate] = useState(false);
  const [curIdx, setCurIdx] = useState(0);
  const [color, setColor] = useState(["black", "white", "gray", "red", "orange", "yellow", "green", "blue", "navy", "purple", "pink"])

  const handleIdx = (num) => {
   
  };

  const handleRotate = (num) => {
    setRotate(!arrowrotate);
    setCurIdx(num);
  };

 
  if (color !== undefined && category !== undefined && brand !== undefined) {
    return (
      <Wrap>
        <FilterContainer>
          <Section>
            <Bar>
              <FilterName>CATEGORY</FilterName>
              <ArrowBtn
                idx="1"
                curIdx={curIdx}
                arrowrotate={arrowrotate}
                handleRotate={handleRotate}
              />
              {/*<ArrowWrap onClick={() => handleRotate()} arrowrotate={arrowrotate}>
              <Arrow>
                <AIcon src={Icon} arrowrotate={arrowrotate} />
              </Arrow>
  </ArrowWrap>*/}
            </Bar>
            <Select idx="1" curIdx={curIdx} arrowrotate={arrowrotate}>
              {category.map((category, index) => {
                return (
                  <FilterBox
                    value={value}
                    checked={checked}
                    handleCheck={handleCheck}
                    check={check}
                    setCheck={setCheck}
                    category={category}
                    data={data}
                    key={index}
                    id={index}
                  />
                );
              })}
            </Select>
          </Section>
          <Section>
            <Bar>
              <FilterName>Gender</FilterName>
              <ArrowBtn
                idx="2"
                curIdx={curIdx}
                arrowrotate={arrowrotate}
                handleRotate={handleRotate}
              />
            </Bar>
            <Select idx="2" curIdx={curIdx} arrowrotate={arrowrotate}>
              {gender.map((gender, index) => {
                return (
                  <FilterBox
                    category={gender}
                    value={value}
                    checked={checked}
                    handleCheck={handleCheck}
                    check={genderCheck}
                    setCheck={setCheck}
                    data={data}
                    key={index}
                    id={index}
                  />
                );
              })}
            </Select>
          </Section>
          <Section>
            <Bar>
              <FilterName>Color</FilterName>
              <ArrowBtn
                idx="3"
                curIdx={curIdx}
                arrowrotate={arrowrotate}
                handleRotate={handleRotate}
              />
            </Bar>
            <Select idx="3" curIdx={curIdx} arrowrotate={arrowrotate}>
              {color.map((color, index) => {
                return (
                  <FilterBox
                    category={color}
                    value={value}
                    checked={checked}
                    handleCheck={handleCheck}
                    check={genderCheck}
                    setCheck={setCheck}
                    data={data}
                    key={index}
                    id={index}
                  />
                );
              })}
            </Select>
          </Section>
          <Section>
            <Bar>
              <FilterName>Price</FilterName>
              <ArrowBtn
                idx="4"
                curIdx={curIdx}
                arrowrotate={arrowrotate}
                handleRotate={handleRotate}
              />
            </Bar>
            <SliderWrap idx="4" curIdx={curIdx} arrowrotate={arrowrotate}>
              <PriceSlider
                price={price}
                minP={minP}
                maxP={maxP}
                handlePrice={handlePrice}
                setRen={setRen}
                ren={ren}
              />
            </SliderWrap>
          </Section>
        </FilterContainer>
      </Wrap>
    );
  }
};

export default Filter;

//style

const Wrap = styled.div`
  position: relative;
  padding-top: 0px;
  top: 0px;
  padding-right: 3px;
  height: auto;
  max-width: 240px;
  min-height: 3px;
  overflow: visible;
  width: 100%;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dfdfdf;
    border-radius: 3px;
  }
  -::-webkit-scrollbar-track {
    background: transparent;
  }
  @media only screen and (max-width: 479px) {
    margin: 0 auto;
    height: auto;
    margin-bottom: 5%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
 
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
  }
`;

  //height: 389px;
  //max-width: 240px;
  //min-height: 3px;
  //overflow: auto;

const FilterContainer = styled.div`
`;
//overflow-y: auto;
const Section = styled.div``;

const Bar = styled.div`
  margin: 10px 0;
  height: 40px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterName = styled.p`
  padding-left: 5px;
  vertical-align: middle;
  line-height: 40px;
  font-size: 17px;
  font-weight: bold;
  @media only screen and (max-width: 479px) {
    margin-top: 2%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    margin-top: 2%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    
  }
`;

//background: ${(props) => (props.arrowrotate === true ? "yellow" : "red")};
//display: ${(props) => (props.arrowrotate === true ? "none" : "block")};
const Select = styled.div`
  height: 100%;
  width: 100%;
  font-size: 12px;
  display: ${(props) =>
    props.arrowrotate === true && props.curIdx === props.idx
      ? `none`
      : `block`};
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dfdfdf;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;
//max-height: 300px;
//width: 100%;
//overflow-y: auto;
//overflow-x: hidden;

const SliderWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  display: ${(props) =>
    props.arrowrotate === true && props.curIdx === props.idx
      ? `none`
      : `block`};
`;
// display: ${(props) => (props.arrowrotate === true ? `none` : `block`)};

//display: ${(props) =>
//props.arrowrotate === true && props.idx === props.curIdx ? "block" : "none"}
