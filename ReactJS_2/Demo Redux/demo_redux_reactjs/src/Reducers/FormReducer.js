import * as types from "../Contains/constants";

let initialState = {
  isShowInputForm: false,
};

let Reducer = (state = initialState, action) => {
  if (action.type === types.show_input) {
    return {
      ...state,
      isShowInputForm: !state.isShowInputForm,
    };
  } else {
    return state;
  }
};

export default Reducer;
