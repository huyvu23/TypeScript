import * as types from "../Contains/ActionTypes";

let initialState = {
  listAccount: [],
};
let Reducer = (state = initialState, action) => {
  if (action.type === types.add_Account) {
    // lấy lại trạng thái State : isShowInputForm
    let listAccount_ = state.listAccount;
    // lấy account truyền vào
    let account_new = action.data;
    listAccount_.push(account_new);
    return {
      ...state,
      listAccount: listAccount_,
    };
  } else {
    return state;
  }
};

export default Reducer;
