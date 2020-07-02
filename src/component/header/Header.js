import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import SolDrop from "./SolDrop";
import CatalogueDrop from "./CatalogueDrop";

const Header = ({ history }) => {
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
      <Container>
        <LogoWrap>
          <Logo target="_blank" href="https://www.piclick.me/">
            <LogoImg
              src="https://www.piclick.me/common/img/main-img/logo.svg"
              alt="logo"
            />
          </Logo>
        </LogoWrap>
        <ConWrap>
          <SolutionWrap onMouseEnter={View} onMouseLeave={View}>
            <SolDrop view={view} />
          </SolutionWrap>
          <CatalogueWrap onMouseEnter={Look} onMouseLeave={Look}>
            <CatalogueDrop look={look} />
          </CatalogueWrap>
          <SignWrap>
            <Login onClick={() => history.push("/login")}>Login</Login>
            <SignUp onClick={() => history.push("/signup")}>SignUP</SignUp>
          </SignWrap>
        </ConWrap>
      </Container>
    </Wrap>
  );
};

export default withRouter(Header);

//style

const Wrap = styled.div`
  background: #1c1c1c;
  width: 100%;
  height: 64px;
  padding: 20px 30px;
  position: fixed;
  top: 0;
  z-index: 2000;
`;

const Container = styled.div`
  background: white;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 105%;
  }
`;

const LogoWrap = styled.div`
  cursor: pointer;
  margin: 0;
  padding: 0;
  height: 27px;
  background: red;
  width: 30%;
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;

const Logo = styled.a`
  color: #337ab7;
  text-decoration: none;
  background-color: transparent;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  margin: 0 auto;
`;

const SolutionWrap = styled.div`
  height: 27px;
  display: flex;
  align-items: center;
  font-weight: bold;
  background: green;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
//width: 200px;

const CatalogueWrap = styled.div`
  height: 27px;
  display: flex;
  align-items: center;
  font-weight: bold;
  background: blue;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
// width: 200px;

const SignWrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 27px;
  font-weight: bold;
  font-size: 16px;
  background: purple;
  @media only screen and (max-width: 1200px) {
    font-size: 100%;
  }
`;

const Login = styled.div`
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    filter: brightness(80%);
  }
`;

const SignUp = styled.div`
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    filter: brightness(80%);
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const ConWrap = styled.div`
  display: flex;
  height: 100%;
  background: grey;
  width: 50%;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    width: 30%;
  }
`;
