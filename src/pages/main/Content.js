import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import ContentBox from "../../component/contentbox/ContentBox";

const Content = ({ data }) => {
  if (data !== undefined) {
    return (
      <Wrap>
        {data.map((data) => {
          return <ContentBox data={data} />;
        })}
      </Wrap>
    );
  }
};

export default Content;

//style

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
