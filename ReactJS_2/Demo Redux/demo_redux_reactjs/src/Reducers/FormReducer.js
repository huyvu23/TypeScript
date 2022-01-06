import * as types from "../Contains/ActionTypes";

let initialState = {
  isShowInputForm: false,
};

let Reducer = (state = initialState, action) => {
  if (action.type === types.show_input) {
    // lấy lại trạng thái State : isShowInputForm
    let isShowInputForm = state.isShowInputForm;
    return {
      ...state,
      isShowInputForm: !isShowInputForm,
    };
  } else {
    return state;
  }
};

export default Reducer;
