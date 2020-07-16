import SideBar from "../component/sidebar/SideBar";
import * as actions from "../actions";
import { connect } from "react-redux";

// store 안의 state 값을 props로 연결해준다.

const mapStateToProps = (state) => ({
  img: state.img,
});

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만든 후, 이를 props로 연결
*/

const mapDispatchToProps = (dispatch) => ({
  onSetImg: () => {
    const img = ["img"];
    dispatch(actions.setImg(img));
  },
});

// SideBar 컴포넌트의 Container 컴포넌트
// SideBar 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할

const ImgArrayCon = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export default ImgArrayCon;
