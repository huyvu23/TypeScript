import * as types from "../Contains/ActionTypes";

// nơi định nghĩa ra các Acction
export const ShowHideForm = () => {
  return {
    type: types.show_input,
  };
};

export const AddAccounts = (account) => {
  return {
    type: types.add_Account,
    data: account,
  };
};
