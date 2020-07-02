import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const CatalogueDrop = ({ look }) => {
  return (
    <DropDown>
      <DropBtn>
        Propduct Catalogue
        <Drop></Drop>
      </DropBtn>
      {look == true && (
        <DropContent>
          <Categories>
            <Big>
              <BigCategory>WOMEN </BigCategory>
              <BigCategory>MEN</BigCategory>
            </Big>
            <Small>
              <Category>Dress</Category>
              <Category>Shoes</Category>
              <Category>Blouse</Category>
              <Category>Bag</Category>
              <Category>Jacket</Category>
              <Category>T Shirt</Category>
              <Category>Shirt</Category>
              <Category>Pants</Category>
            </Small>
          </Categories>
        </DropContent>
      )}
    </DropDown>
  );
};

export default CatalogueDrop;

//style

const DropDown = styled.div`
  overflow: hidden;
`;

const DropBtn = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
  &:hover {
    transition: all 0.3s ease-in-out;
    filter: brightness(80%);
  }
  @media only screen and (max-width: 1200px) {
    font-size: 100%;
  }
`;

const Drop = styled.i``;

const DropContent = styled.div`
  display: block;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: none;
  filter: brightness(90%);
`;

const BigCategory = styled.div`
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    color: #f9714c;
    transition: all 0.3s ease-in-out;
    filter: brightness(80%);
  }
`;

const Category = styled.div`
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    color: #f9714c;
    transition: all 0.3s ease-in-out;
    filter: brightness(80%);
  }
`;

const Categories = styled.div`
  width: 180px;
`;

const Big = styled.div`
  display: flex;
  justify-content: center;
`;

const Small = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
