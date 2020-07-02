import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SolDrop = ({ view }) => {
  console.log("props: ", view);
  return (
    <DropDown>
      <DropBtn>
        Select Solutions
        <Drop></Drop>
      </DropBtn>
      {view == true && (
        <DropContent>
          <Sol>Visual Search</Sol>
          <Sol>Shop The Look</Sol>
          <Sol>Recommendation</Sol>
        </DropContent>
      )}
    </DropDown>
  );
};

export default SolDrop;

//style

const DropDown = styled.div`
  overflow: hidden;
`;

const DropBtn = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  color: #fff;
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

const Sol = styled.a`
  float: none;
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

// &:hover {
//  background-color: #555;
// }
