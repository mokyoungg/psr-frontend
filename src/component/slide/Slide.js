import React, { Component } from "react";
import Slider from "react-slick";
import SlideContent from "./SlideContent";
import styled from "styled-components";
/*
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#111",
        fill: "red",
        color: "red",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

//arrows: true,
//prevArrow: <SamplePrevArrow />,
//nextArrow: <SampleNextArrow />,
*/
const Slide = ({ data, handleRen }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [ // 반응형 웹 구현 옵션
      {
          breakpoint: 1200, // 화면 사이즈 1200px
          settings: {
            slidesToShow: 3,
          }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <Wrap>
      <Slider {...settings}>
        {data.map((data) => {
          return <SlideContent data={data} handleRen={handleRen} />;
        })}
      </Slider>
    </Wrap>
  );
};

export default Slide;

const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
  .slick-prev:before {
    opaicty: 1;
    color: black;
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
  @media only screen and (max-width: 479px) {
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-top: 5%;
  }
`;
