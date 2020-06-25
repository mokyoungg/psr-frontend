import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Icon from "../../image/icon.png";
import FilterBox from "../../component/filterbox/FilterBox";

const Filter = ({ color, category, brand }) => {
  const [rotate, setRotate] = useState(false);
  const handleRotate = () => {
    setRotate(!rotate);
  };

  console.log("rote :", rotate);

  return (
    <Wrap>
      <FilterContainer>
        <Section>
          <Bar>
            <FilterName>CATEGORY</FilterName>
            <ArrowWrap onClick={() => handleRotate()}>
              <Arrow>
                <AIcon src={Icon} />
              </Arrow>
            </ArrowWrap>
          </Bar>
          <Select>
            {category.map((category) => {
              return <FilterBox data={category} />;
            })}
          </Select>
        </Section>
        <Section>
          <Bar>
            <FilterName>Product Color</FilterName>
            <ArrowWrap>
              <Arrow>
                <AIcon src={Icon} />
              </Arrow>
            </ArrowWrap>
          </Bar>
          <Select>
            {color.map((color) => {
              return <FilterBox data={color} />;
            })}
          </Select>
        </Section>
        <Section>
          <Bar>
            <FilterName>Brand</FilterName>
            <ArrowWrap>
              <Arrow>
                <AIcon src={Icon} />
              </Arrow>
            </ArrowWrap>
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
};

export default Filter;

//animation

const rotate = keyframes`
  from{
    background: transparent;
  }
  to {
    background: red;
  }
`;

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
  background: ${(props) => (props.rotate ? "yellow" : "red")};
`;

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
`;

const Select = styled.div`
  height: 100%;
  max-height: 300px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 12px;
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
