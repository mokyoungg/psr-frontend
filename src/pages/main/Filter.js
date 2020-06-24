import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../image/icon.png";
import FilterBox from "../../component/filterbox/FilterBox";

const Filter = ({ color, category }) => {
  return (
    <Wrap>
      <FilterContainer>
        <Section>
          <Bar>
            <FilterName>CATEGORY</FilterName>
            <ArrowWrap>
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
      </FilterContainer>
    </Wrap>
  );
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
  height: 203px;
  max-height: 300px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 12px;
`;

const ItemContainer = styled.div`
  height: 20px;

  padding: 0 5px;
  display: flex;
  font-size: 12px;
`;

const ItemInner = styled.div`
  align-self: center;
  margin: 5px 0 0 !important;
  position: relative;
  display: block;
  padding-left: 20px;
`;

const CheckBox = styled.input`
  position: absolute;
  margin-left: -20px;
  opacity: 1;
  z-index: 1;
  cursor: pointer;
`;

const Label = styled.label`
  white-space: nowrap;
  font-weight: lighter;
  padding-left: 10px !important;
  min-height: 20px;
  margin-bottom: 0;
  cursor: pointer;
  display: inline-block;
  position: relative;
`;
