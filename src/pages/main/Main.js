import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/header/Header";
import SearchBar from "./SearchBar";
import Content from "./Content";
import Filter from "./Filter";
import SearchBox from "../../component/searchbox/SearchBox";
import { URL } from "../../Config";
import { trackPromise } from "react-promise-tracker";
import Indicator from "../../component/Indicator/Indicator";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { addImg } from "../../actions/action";
import SideBar from "../../component/sidebar/SideBar";

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
  const [checkk, setCheck] = useState([]);
  const [strTonum, setNS] = useState([]);
  const [coordi, setCoor] = useState([]);
  const [tempD, setTemp] = useState([]);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(``);
  const [load, setLoad] = useState(true);
  const [res, setRes] = useState([]);
  const [ren, setRen] = useState(true);
  const [price, setPrice] = useState([]);
  const [tempP, setTempP] = useState([]);
  const [minP, setMin] = useState();
  const [maxP, setMax] = useState();
  const [gender, setGen] = useState([]);
  const [checkG, setGch] = useState([]);
  const [strToAl, setGA] = useState([]);
  const [filterOn, setOn] = useState(false);

  const handleOn = () => {
    setOn(!filterOn)
  }
  //분명히 이것보다 간편한 방법이 있을 것이다. 나중에 조정해야할 필요가 있다.

  const handlePrice = (event, newValue) => {
    setPrice(newValue);
    setTempP(newValue);
  };

  const handleCheck = (key) => {
    //console.log("key :", key);
    //setValue(e.target.value);
    setChecked(!checked);
  };

  const handleLoad = () => {
    setLoad(false);
  };

  const arrFilter = (arr, key) => {
    const newarr = [];
    arr.map((abc) => {
      newarr.push(abc[key]);
    });
    return Array.from(new Set(newarr));
  };

  const genderFilter = (data) => {
    let result = [];

    const gender_rule = {
      M: "Man",
      W: "Woman",
      U: "Unisex",
    };

    data.map((data) => {
      if (data.product_label1 === "M") {
        result.push(gender_rule[data.product_label1]);
      } else if (data.product_label1 === "W") {
        result.push(gender_rule[data.product_label1]);
      } else if (data.product_label1 === "U") {
        result.push(gender_rule[data.product_label1]);
      }
    });
    return Array.from(new Set(result));
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
      if (data.product_label2 === "C") {
        result.push(clothing_rule[data.product_label3]);
      } else if (data.product_label2 === "F") {
        result.push(footwear_rule[data.product_label3]);
      } else if (data.product_label2 === "B") {
        result.push(bag_rule[data.product_label3]);
      } else if (data.product_label2 === "J") {
        result.push(jewelry_rule[data.product_labe3]);
      } else if (data.product_lable2 === "A") {
        result.push(accessory_rule[data.product_label3]);
      } else if (data.product_label2 === "Z") {
        result.push(anything_rule[data.product_label3]);
      } else if (data.product_labe2 === "T") {
        result.push(impossible_rule[data.product_lable13]);
      } else if (data.product_label1 === "U") {
      }
    });
    return Array.from(new Set(result));
  };
  const stringToNum = (aaa) => {
    let result = [];
    const rule = {
      Everything: { product_label2: "C", product_label3: "10" },
      Outer: { product_label2: "C", product_label3: "11" },
      Top: { product_label2: "C", product_label3: "12" },
      Dress: { product_label2: "C", product_label3: "13" },
      Jumpsuit: { product_label2: "C", product_label3: "14" },
      Suit: { product_label2: "C", product_label3: "15" },
      Swimsuit: { product_label2: "C", product_label3: "16" },
      Pants: { product_label2: "C", product_label3: "17" },
      Skirts: { product_label2: "C", product_label3: "18" },
      Shoes: { product_label2: "F", product_label3: "11" },
      Sneakers: { product_label2: "F", product_label3: "12" },
      Handbag: { product_label2: "B", product_label3: "11" },
      Backpack: { product_label2: "B", product_label3: "12" },
      Travelbag: { product_label2: "B", product_label3: "13" },
      Necklace: { product_label2: "J", product_label3: "11" },
      Earring: { product_label2: "J", product_label3: "12" },
      Bracelet: { product_label2: "J", product_label3: "13" },
      Eyewear: { product_label2: "A", product_label3: "11" },
      Belt: { product_label2: "A", product_label3: "12" },
      Scarves: { product_label2: "A", product_label3: "13" },
      Gloves: { product_label2: "A", product_label3: "14" },
      Hats: { product_label2: "A", product_label3: "15" },
      Watch: { product_label2: "A", product_label3: "16" },
      NeckTie: { product_label2: "A", product_label3: "17" },
      "Anything but Clothing": { product_label2: "Z", product_label3: "10" },
      분류불가: { product_label2: "T", product_label3: "17" },
    };

    aaa.map((item) => {
      result.push(rule[item]);
    });
    return result;
  };

  const lastFilter = (a, b) => {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (
          a[i]["product_label2"] === b[j]["product_label2"] &&
          a[i]["product_label3"] === b[j]["product_label3"]
        ) {
          result = result.concat([a[i]]);
        }
      }
    }
    return result;
  };

  const genLastFilter = (a, b) => {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i]["product_label1"] === b[j]) {
          result = result.concat([a[i]]);
        }
      }
    }
    return result;
  };

  const makeData = (aaa) => {
    let result = [];
    for (let i = 0; i < aaa.length; i++) {
      result = result.concat(aaa[i]["product"]);
    }
    return result;
  };

  const makeCoordi = (aaa) => {
    let result = [];
    for (let i = 0; i < aaa.length; i++) {
      result = result.concat(aaa[i]["coordinates"]);
    }
    return result;
  };

  const mCoordi = (aaa) => {
    let result = [];
    for (let i = 0; i < aaa.length / 4 + 1; i++) {
      let a = aaa.splice(0, 4);
      result = result.concat([a]);
    }
    return result;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    fetch(`${URL}`) //`${URL}/` http://localhost:3000/data/data.json
      .then((res) => res.json())
      .then((res) => {
        if (boxview === false) {
          const price = res.product.map((data) => data.price);
          const max = price.reduce(function (pre, cur) {
            return pre > cur ? pre : cur;
          });
          const min = price.reduce(function (pre, cur) {
            return pre > cur ? cur : pre;
          });
          setData(res.product);
          setCate(categoryFilter(res.product));
          setMin(min);
          setMax(max);
          setPrice([min, max]);
          setGen(genderFilter(res.product));
          if (checkk.length > 0) {
            const checkedData = lastFilter(res.product, strTonum);
            setData(checkedData);
            if (tempP.legnth > 0) {
              const priceData = checkedData.filter(
                (data) => tempP[0] <= data.price && data.price <= tempP[1]
              );
              setData(priceData);
              setPrice(tempP[0], tempP[1]);
              if (checkG.length > 0) {
                const genderData = genLastFilter(priceData, strToAl);
                setData(genderData);
              }
            }
          } else if (tempP.length > 0) {
            const priceData = res.product.filter(
              (data) => tempP[0] <= data.price && data.price <= tempP[1]
            );
            
            setData(priceData);
            setPrice([tempP[0], tempP[1]]);
          } else if (checkG.length > 0) {
            const genderData = genLastFilter(res.product, strToAl);
            setData(genderData);
          }
          //setCate(arrFilter(res.data, category));
          //setBrand(arrFilter(res.data, brand));
          //setColor(arrFilter(res.data, color));
        } else if (boxview === true) {
          const price = tempD.map((data) => data.price);
          const max = price.reduce(function (pre, cur) {
            return pre > cur ? pre : cur;
          });
          const min = price.reduce(function (pre, cur) {
            return pre > cur ? cur : pre;
          });
          setData(tempD);
          setMin(min);
          setMax(max);
          setPrice([min, max]);
          if (checkk.length > 0) {
            const checkedData = lastFilter(tempD, strTonum);
            setData(checkedData);
            if (tempP.length > 0) {
              const priceData = checkedData.filter(
                (data) => tempP[0] <= data.price && data.price <= tempP[1]
              );
              setData(priceData);
              setPrice([tempP[0], tempP[1]]);
              if (checkG.length > 0) {
                const genderData = genLastFilter(priceData, strToAl);
                setData(genderData);
              }
            }
          } else if (tempP.length > 0) {
            const priceData = tempD.filter(
              (data) => tempP[0] <= data.price && data.price <= tempP[1]
            );
            setData(priceData);
            setPrice([tempP[0], tempP[1]]);
          } else if (checkG.length > 0) {
            const genderData = genLastFilter(tempD, strToAl);
            setData(genderData);
          }
        }
      });
  }, [checkk, boxview, ren, checkG]);

  const setSearch = (e) => {
    setImgUrl(e.target.value);
    setBox(false);
  };

  const doSearch = () => {
    setCheck([]);
    setRen(!ren);
    setLoad(true);
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
          const useData = makeData(res.grouped_results);
          const useCoordi = makeCoordi(res.grouped_results);
          setData(useData);
          setTemp(useData);
          setBox(true);
          setCate(categoryFilter(useData));
          setCoor(mCoordi(useCoordi));
          setRes(res.grouped_results);
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
        setPre(base64.toString()); //
      }
    };
    if (file) {
      reader.readAsDataURL(file);
      setImgFile(file);
      fileSearch(file);
    }
  };

  const fileSearch = (file) => {
    setCheck([]);
    setRen(!ren);
    setLoad(true);
    console.log("fileClick!");
    const formData = new FormData();
    formData.append("data", file);

    fetch(`${URL}/file`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log("grs :", res.grouped_results);
        const useData = makeData(res.grouped_results);
        //console.log("DHKZ: ", useData);
        setData(useData);
        setTemp(useData);
        setCate(categoryFilter(useData));
        setBox(true);
        setRes(res.grouped_results);
      });
  };

  //checkk 는 state, 빈 배열
  const check = (category) => {
    console.log("들어오는 데이터 :", category);

    let result = [];
    if (checkk.includes(category) === true) {
      result = checkk.filter((a) => a !== category);
      console.log("있음 :", result);
      setCheck(result);
      setNS(stringToNum(result));
    } else {
      result = checkk.concat([category]);
      console.log("없음 :", result);
      setCheck(result);
      setNS(stringToNum(result));
    }
  };

  const stringToAl = (aaa) => {
    let result = [];
    const rule = {
      Unisex: "U",
      Woman: "W",
      Man: "M",
    };

    aaa.map((item) => {
      result.push(rule[item]);
    });
    return result;
  };

  const genderCheck = (category) => {
    console.log("들어오는 데이터 :", category);
    let result = [];
    if (checkG.includes(category) === true) {
      result = checkG.filter((a) => a !== category);
      console.log("ge있 :", result);
      setGch(result);
      setGA(stringToAl(result));
    } else {
      result = checkG.concat([category]);
      console.log("ge 없 :", result);
      setGch(result);
      setGA(stringToAl(result));
    }
  };

  const handleData = (index) => {
    setData(res[index].product);
  };

 
  return (
    <Wrap>
      <Header />
      <Section>
        <Hidden>
          <SearchBox
            handleData={handleData}
            coordi={coordi}
            img={img_url}
            boxview={boxview}
            preview={preview}
            res={res}
          />
        </Hidden>
        <TopSection>
          <SearchBar
            doSearch={doSearch}
            searchSet={setSearch}
            setFile={setFile}
            fileSearch={fileSearch}
          />
          <Hidden>
            <FilterBtn onClick={()=> handleOn()}>상세필터</FilterBtn>
            {filterOn &&
            <Filter  value={value}
                checked={checked}
                handleCheck={handleCheck}
                check={check}
                setCheck={setCheck}
                color={color}
                category={category}
                brand={brand}
                data={data}
                price={price}
                minP={minP}
                maxP={maxP}
                handlePrice={handlePrice}
                setRen={setRen}
                ren={ren}
                gender={gender}
                genderCheck={genderCheck} />}
          </Hidden>
        </TopSection>

        {load ? (
          <Indicator />
        ) : (
          <MainSection>
            <LeftSection>
              <SearchBox
                handleData={handleData}
                coordi={coordi}
                img={img_url}
                boxview={boxview}
                preview={preview}
                res={res}
              />
              <Filter
                value={value}
                checked={checked}
                handleCheck={handleCheck}
                check={check}
                setCheck={setCheck}
                color={color}
                category={category}
                brand={brand}
                data={data}
                price={price}
                minP={minP}
                maxP={maxP}
                handlePrice={handlePrice}
                setRen={setRen}
                ren={ren}
                gender={gender}
                genderCheck={genderCheck}
              />
            </LeftSection>
            <RightSection>
              <Content data={data} />
            </RightSection>
          </MainSection>
        )}
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
  @media only screen and (max-width: 479px) {
    width: 100%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
  }
`;
//background: green;

const TopSection = styled.div`
  margin-top: 20px;
  width: 97%;
  @media only screen and (max-width: 479px) {
    width: 100%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 100%;
  }
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 479px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

const LeftSection = styled.div`
  margin-top: 1%;
  width: 20%;
  @media only screen and (max-width: 479px) {
    display: none;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 20%;

    top: 0;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 20%;
    top: 0;
  }
`;

const RightSection = styled.div`
  width: 80%;
  height: 100%;
  @media only screen and (max-width: 479px) {
    width: 100%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 78%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 78%;
  }
`;

const Hidden = styled.div`
  @media only screen and (max-width: 479px) {
    display: block;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: block;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    display: none;
  }
  @media only screen and (min-width: 1201px) {
    display: none;
  }
`;

const FilterBtn = styled.div `
  font-size: 15px;
  padding: 3%;
  text-align: center;
  border: 0.5px solid #ddd;
`

//반응형 기준
/* PC , 테블릿 가로 (해상도 768px ~ 1023px)
@media all and (min-width:768px) and (max-width:1023px) { /*스타일입력*/

/* 테블릿 세로 (해상도 768px ~ 1023px)
@media all and (min-width:768px) and (max-width:1023px) { /*스타일입력*/

/* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)
@media all and (min-width:480px) and (max-width:767px) { /*스타일입력*/

/* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)
@media all and (max-width:479px) { /*스타일입력*/

//@media only screen and (max-width: 768px) {
//  font-size: 12px;
//}
