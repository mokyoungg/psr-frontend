import React, { Component, useState, useEffect } from "react";
import ImgList from "./ImgList";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const SideBar = () => {
  return (
    <Wrap>
      <ImgList />
    </Wrap>
  );
};

export default SideBar;

const Wrap = styled.div`
  width: 50%;
  height: 50%;
`;
