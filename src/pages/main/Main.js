import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/header/Header";
import SearchBar from "./SearchBar";
import Content from "./Content";
import Filter from "./Filter";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  return (
    <Wrap>
      <Header />
      <Section>
        <TopSection>
          <SearchBar />
        </TopSection>
        <MainSection>
          <LeftSection>
            <Filter data={data} />
          </LeftSection>
          <RightSection>
            <Content data={data} />
          </RightSection>
        </MainSection>
      </Section>
    </Wrap>
  );
};

export default Main;

//style

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Section = styled.div`
  margin-top: 64px;
  width: 77%;
`;
//background: green;

const TopSection = styled.div`
  margin-top: 20px;
`;

const MainSection = styled.div`
  background: green;
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  width: 20%;
`;

const RightSection = styled.div`
  width: 80%;
  height: 100%;
  background: yellow;
`;
