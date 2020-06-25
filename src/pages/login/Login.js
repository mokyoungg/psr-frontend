import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/header/Header";

const Login = () => {
  return (
    <Wrap>
      <Section>
        <LoginBox>
          <LogoBox>PICLICK</LogoBox>
          <InfoBox>
            <div>
              <InputWrap>
                <InputBox type="text" placeholder="ID" />
              </InputWrap>
              <InputWrap>
                <InputBox type="password" placeholder="Password" />
              </InputWrap>
            </div>
            <SignUpWrap>계정이 없으신가요?</SignUpWrap>
            <BtnBox>
              <LoginBtn>Login</LoginBtn>
            </BtnBox>
          </InfoBox>
        </LoginBox>
      </Section>
    </Wrap>
  );
};

export default Login;

//style

const Wrap = styled.div`
  background: #f1f1f1;
`;

const Section = styled.div`
  background: #f1f1f1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  background: #fff;
  width: 470px;
  height: 580px;
  position: relative;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 2%;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #black;
`;

const LogoBox = styled.div`
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  color: #1095ce;
  margin-top: 10%;
`;

const InfoBox = styled.div`
  margin-top: 65px;
  width: 70%;
  height: 300px;
  color: #8b8b8b;
  font-weight: 300;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const InputWrap = styled.div`
  color: #8b8b8b;
  font-weight: 300;
  font-size: 15px;
  display: flex;
  justify-content: center;
`;

const InputBox = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  width: 80%;
  height: 40px;
  line-height: 20px;
  outline: none;
  padding: 4px 8px;
  font-size: 100%;
  color: #8b8b8b;
  cursor: auto;
`;

const BtnBox = styled.div`
  padding: 0;
  clear: both;
  height: 30%;
  border: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;
//  margin-top: 30px;

const LoginBtn = styled.div`
  width: 260px;
  background-color: #1c1c1c;
  margin: 0 auto !important;
  color: #fff;
  min-width: 72px;
  border-radius: 1000px;
  border-color: #ddd;
  height: 37px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpWrap = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
`;

// margin-top: 30px;
