import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/header/Header";
import SearchBar from "./SearchBar";
import Content from "./Content";
import Filter from "./Filter";
import SearchBox from "../../component/searchbox/SearchBox";
import { URL } from "../../Config";

const Main = ({ history }) => {
  /*
  const [state, setState] = useState({
    data: [],
    category: [],
    color: [],
    brand: [],
    img_url: "",
    boxview: false,
  });
  */
  const [data, setData] = useState([]);
  const [category, setCate] = useState([]);
  const [color, setColor] = useState([]);
  const [brand, setBrand] = useState([]);
  const [img_url, setImgUrl] = useState("");
  const [img_file, setImgFile] = useState("");
  const [boxview, setBox] = useState(false);
  const [preview, setPre] = useState("");

  //분명히 이것보다 간편한 방법이 있을 것이다. 나중에 조정해야할 필요가 있다.

  const arrFilter = (arr, key) => {
    const newarr = [];
    arr.map((abc) => {
      newarr.push(abc[key]);
    });
    return Array.from(new Set(newarr));
  };

  const categoryFilter = (data) => {
    let result = [];

    const clothing_rule = {
      10: "Everything",
      11: "Outer",
      12: "Top",
      13: "Dress",
      14: "Jumpsuit",
      15: "Suit",
      16: "Swimsuit",
      17: "Pants",
      18: "Skirts",
    };

    const footwear_rule = {
      10: "Everything",
      11: "Shoes",
      12: "Sneakers",
    };

    const bag_rule = {
      10: "Everything",
      11: "Handbag",
      12: "Backpack",
      13: "Travelbag",
    };

    const jewelry_rule = {
      10: "Everything",
      11: "Necklace",
      12: "Earring",
      13: "Bracelet",
    };

    const accessory_rule = {
      10: "Everything",
      11: "Eyewear",
      12: "Belt",
      13: "Scarves",
      14: "Gloves",
      15: "Hats",
      16: "Watch",
      17: "NeckTie",
    };

    const anything_rule = {
      10: "Anything but Clothing",
    };
    const impossible_rule = {
      10: "분류불가",
    };

    data.map((data) => {
      if (data.label2 === "C") {
        result.push(clothing_rule[data.label3]);
      } else if (data.label2 === "F") {
        result.push(footwear_rule[data.label3]);
      } else if (data.label2 === "B") {
        result.push(bag_rule[data.label3]);
      } else if (data.label2 === "J") {
        result.push(jewelry_rule[data.labe3]);
      } else if (data.lable2 === "A") {
        result.push(accessory_rule[data.label3]);
      } else if (data.label2 === "Z") {
        result.push(anything_rule[data.label3]);
      } else if (data.labe2 === "T") {
        result.push(impossible_rule[data.lable13]);
      }
    });
    return Array.from(new Set(result));
  };
  /*
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
  */
  useEffect(() => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setCate(arrFilter(res.data, "category"));
        setColor(arrFilter(res.data, "color"));
        setBrand(arrFilter(res.data, "brand"));
      });
  }, []);

  /*
  const setSearch = (e) => {
    setState({ ...state, img_url: e.target.value, boxview: false });
  };
*/
  const setSearch = (e) => {
    setImgUrl(e.target.value);
    setBox(false);
  };

  const doSearch = () => {
    console.log("click!");
    if (img_url) {
      fetch(`${URL}/image`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img_url: img_url,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res.product);
          setCate(categoryFilter(res.product));
          setBox(true);
        });
    }
  };

  const setFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    //setImgFile(file);
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setPre(base64.toString());
      }
    };
    if (file) {
      reader.readAsDataURL(file);
      setImgFile(file);
    }
  };

  const fileSearch = () => {
    console.log("fileClick!");
    const formData = new FormData();
    formData.append("data", img_file);
    fetch(`${URL}/file`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.product);
        setCate(categoryFilter(res.product));
        setBox(true);
      });
  };

  console.log("data 입니다 :", data);
  console.log("file :", img_file);

  return (
    <Wrap>
      <Header />
      <Section>
        <TopSection>
          <SearchBar
            doSearch={doSearch}
            searchSet={setSearch}
            setFile={setFile}
            fileSearch={fileSearch}
          />
        </TopSection>
        <MainSection>
          <LeftSection>
            <SearchBox img={img_url} boxview={boxview} preview={preview} />
            <Filter color={color} category={category} brand={brand} />
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

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
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

  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (max-width: 992px) {
    width: 30%;
  }
`;

const RightSection = styled.div`
  width: 80%;
  height: 100%;
  background: yellow;

  @media only screen and (max-width: 992px) {
    width: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
