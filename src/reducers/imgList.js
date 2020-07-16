const initailState = [];

export const imgList = (state = initailState, action) => {
  switch (action.type) {
    case "ADD_IMG":
      return [...state, action.data];
    default:
      return state;
  }
};

/*
export const songList = (state = initialState, action) => { //state 초기값 설정
  switch (action.type) {
      case "ADD_SONG" :
          return [ ...state, action.payload ]
      default:
          return state;
  }
}
*/
