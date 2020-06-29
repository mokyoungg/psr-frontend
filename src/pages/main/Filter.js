import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Icon from "../../image/icon.png";
import FilterBox from "../../component/filterbox/FilterBox";
import ArrowBtn from "../../component/arrow/ArrowBtn";

const Filter = ({ color, category, brand }) => {
  const [arrowrotate, setRotate] = useState(false);
  const handleRotate = (e) => {
    setRotate(!arrowrotate);
  };

  if (color !== undefined && category !== undefined && brand !== undefined) {
    return (
      <Wrap>
        <FilterContainer>
          <Section>
            <Bar>
              <FilterName>CATEGORY</FilterName>
              <ArrowBtn arrowrotate={arrowrotate} handleRotate={handleRotate} />
              {/*<ArrowWrap onClick={() => handleRotate()} arrowrotate={arrowrotate}>
              <Arrow>
                <AIcon src={Icon} arrowrotate={arrowrotate} />
              </Arrow>
  </ArrowWrap>*/}
            </Bar>
            <Select arrowrotate={arrowrotate}>
              {category.map((category) => {
                return <FilterBox data={category} />;
              })}
            </Select>
          </Section>
          <Section>
            <Bar>
              <FilterName>Product Color</FilterName>
              <ArrowBtn arrowrotate={arrowrotate} handleRotate={handleRotate} />
            </Bar>
            <Select arrowrotate={arrowrotate}>
              {color.map((color) => {
                return <FilterBox data={color} />;
              })}
            </Select>
          </Section>
          <Section>
            <Bar>
              <FilterName>Brand</FilterName>
              <ArrowBtn arrowrotate={arrowrotate} handleRotate={handleRotate} />
            </Bar>
            <Select>
              {brand.map((brand) => {
                return <FilterBox data={brand} />;
              })}
            </Select>
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
  height: 389px;
  max-width: 240px;
  min-height: 3px;
  overflow: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dfdfdf;
    border-radius: 3px;
  }
  &::-webkit-scorllbar-track {
    background: transparent;
  }
`;

const FilterContainer = styled.div`
  overflow-y: auto;
`;

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
`;

const ArrowWrap = styled.span`
  padding-right: 5px;
  float: right;
  vertical-align: middle;
  line-height: 40px;
  font-size: 12px;
  background: ${(props) => (props.arrowrotate === true ? "yellow" : "red")};
`;

//${(props) => (props.rotate === true ? "yellow" : "red")};

const Arrow = styled.span`
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-weight: 800;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  margin-left: 20px;
`;

const AIcon = styled.img`
  width: 12px;
  height: 12px;
  transform: rotate(270deg);
  transform: ${(props) =>
    props.arrowrotate === true ? `rotate(90deg)` : `rotate(270deg)`};
`;

//background: ${(props) => (props.arrowrotate === true ? "yellow" : "red")};
//display: ${(props) => (props.arrowrotate === true ? "none" : "block")};
const Select = styled.div`
  height: 100%;
  max-height: 300px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 12px;
  display: ${(props) => (props.arrowrotate === true ? `none` : `block`)};
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dfdfdf;
    border-radius: 3px;
  }
  &::-webkit-scorllbar-track-element {
    background: transparent;
  }
`;
