import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/header/Header";
import SearchBar from "../main/SearchBar";
import Content from "../main/Content";
import Filter from "../main/Filter";
import SearchBox from "../../component/searchbox/SearchBox";

const VisualSearch = ({ props }) => {
  const [state, setState] = useState({
    data: [],
    category: [],
    color: [],
    brand: [],
    search: "",
  });

  const arrFilter = (arr, key) => {
    const newarr = [];
    arr.map((abc) => {
      newarr.push(abc[key]);
    });
    return Array.from(new Set(newarr));
  };
  useEffect(() => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) =>
        setState({
          data: res.data,
          color: arrFilter(res.data, "color"),
          category: arrFilter(res.data, "category"),
          brand: arrFilter(res.data, "brand"),
        })
      );
  }, []);

  const setSearch = (e) => {
    setState({ ...state, search: e.target.value });
  };

  const doSearch = () => {
    console.log("click!");
    fetch("http://10.110.161.189:8000/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img_url: state.search,
      }),
    })
      .then((res) => res.json())
      .then((res) => setState({ ...state, data: res.product }));
  };

  console.log("data 입니다 :", state.data);
  console.log("searc url :", state.search);
  console.log("props 입니다 :", props);
  return (
    <Wrap>
      <Header />
      <Section>
        <TopSection>
          <SearchBar doSearch={doSearch} searchSet={setSearch} />
        </TopSection>
        <MainSection>
          <LeftSection>
            <SearchBox />
            <Filter
              color={state.color}
              category={state.category}
              brand={state.brand}
            />
          </LeftSection>
          <RightSection>
            <Content data={state.data} />
          </RightSection>
        </MainSection>
      </Section>
    </Wrap>
  );
};

export default VisualSearch;

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
