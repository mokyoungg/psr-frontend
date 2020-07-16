import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Img = ({ imgList }) => {
  return (
    <div>
      {imgList.map((img) => {
        return <img src={img.data} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imgList: state.imgList,
  };
};

export default connect(mapStateToProps)(Img);
