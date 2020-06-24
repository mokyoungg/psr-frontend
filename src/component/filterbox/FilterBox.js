import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const FilterBox = ({ data }) => {
  return (
    <ItemContainer>
      <ItemInner>
        <CheckBox type="checkbox" />
        <Label>{data}</Label>
      </ItemInner>
    </ItemContainer>
  );
};

export default FilterBox;

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
