import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Wrap></Wrap>
    </>
  );
};

export default Main;

//style

const Wrap = styled.div`
  font-size: 150px;
`;
