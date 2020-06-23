import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import SolDrop from "./SolDrop";
import CatalogueDrop from "./CatalogueDrop";

const Header = (props) => {
  const [view, setView] = useState(false);
  const [look, setLook] = useState(false);

  const View = () => {
    setView(!view);
  };

  const Look = () => {
    setLook(!look);
  };

  console.log(view);
  return (
    <Wrap>
      <LogoWrap>
        <Logo target="_blank" href="https://www.piclick.me/">
          <LogoImg
            src="https://www.piclick.me/common/img/main-img/logo.svg"
            alt="logo"
          />
        </Logo>
      </LogoWrap>
      <SolutionWrap onMouseEnter={View} onMouseLeave={View}>
        <SolDrop view={view} />
      </SolutionWrap>
      <CatalogueWrap onMouseEnter={Look} onMouseLeave={Look}>
        <CatalogueDrop look={look} />
      </CatalogueWrap>
      <SignWrap>
        <Login>Login</Login>
        <SignUp>SignUP</SignUp>
      </SignWrap>
    </Wrap>
  );
};

export default Header;

//style

const Wrap = styled.div`
  background: #1c1c1c;
  width: 100%;
  min-width: 1400px;
  height: 64px;
  padding: 20px 30px;
  position: fixed;
  z-index: 2000;
  display: flex;
`;

const LogoWrap = styled.div`
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: 100px;
  height: 27px;
`;

const Logo = styled.a`
  color: #337ab7;
  text-decoration: none;
  background-color: transparent;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;

const SolutionWrap = styled.div`
  width: 200px;
  height: 27px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const CatalogueWrap = styled.div`
  width: 200px;
  height: 27px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const SignWrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 27px;
  font-weight: bold;
  font-size: 16px;
`;

const Login = styled.div`
  &:hover {
    transition: all 0.3s ease-in-out;
    filter: brightness(80%);
  }
`;

const SignUp = styled.div`
  &:hover {
    transition: all 0.3s ease-in-out;
    filter: brightness(80%);
  }
`;
