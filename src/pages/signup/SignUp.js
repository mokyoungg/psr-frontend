import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SignUp = ({ history }) => {
  /*
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [repass, setRepass] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleRepass = (e) => {
    setRepass(e.target.value);
  };

  */

  const [state, setState] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const handleSignUp = () => {
    const formData = new FormData();
    formData.append("email", state.email);
    formData.append("password1", state.password);
    formData.append("password2", state.repassword);
    fetch("http://10.110.161.189:8000/account/sign-up", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        alert("가입되었습니다.");
        history.push("/login");
      });
  };

  const checkValid = () => {
    const { email, password, repassword } = state;
    {
      !email || !password || !repassword
        ? alert("입력되지 않은 정보가 있습니다.")
        : checkValid2();
    }
  };

  const checkValid2 = () => {
    const { email, password, repassword } = state;
    if (!email.includes("@")) {
      alert("이메일 형식이 잘 못 되었습니다.");
    } else if (password !== repassword) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      handleSignUp();
    }
  };

  return (
    <Wrap>
      <Section>
        <SignUpWrap>
          <LogoBox>PICLICK</LogoBox>
          <InfoBox>
            <div>
              <InputWrap>
                <InputBox
                  value={state.email}
                  type="text"
                  placeholder="Email"
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                />
              </InputWrap>
              <InputWrap>
                <InputBox
                  value={state.password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                />
              </InputWrap>
              <InputWrap>
                <InputBox
                  value={state.repassword}
                  type="password"
                  placeholder="비밀번호를 한 번 더 입력해주세요"
                  onChange={(e) =>
                    setState({ ...state, repassword: e.target.value })
                  }
                />
              </InputWrap>
            </div>
            <BtnBox>
              <SignUpBtn
                onClick={() => checkValid()}
                email={state.email}
                password={state.password}
                repassword={state.repassword}
              >
                가입하기
              </SignUpBtn>
            </BtnBox>
          </InfoBox>
        </SignUpWrap>
      </Section>
    </Wrap>
  );
};

export default withRouter(SignUp);

//style

const Wrap = styled.div`
  background: #f1f1f1;
`;

const Section = styled.div`
  background: #f1f1f1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const SignUpWrap = styled.div`
  background: #fff;
  width: 470px;
  height: 700px;
  position: relative;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 70%;
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
  margin: 15px auto;
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

const SignUpBtn = styled.div`
  width: 260px;
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
  cursor: pointer;
  background-color: ${(props) =>
    props.email.length > 1 &&
    props.password.length > 1 &&
    props.repassword.length > 1
      ? "#1095CE"
      : "#1c1c1c"};
`;
