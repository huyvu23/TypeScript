import { createStore } from "redux";
import * as types from "./Contains/ActionTypes";
import indexReducer from "./Reducers/IndexReducer";
import { ShowHideForm } from "./Action/index";

const store = createStore(indexReducer);
console.log("State isShowInputForm ban đầu ", store.getState());
store.dispatch(ShowHideForm);
console.log("State isShowInputForm sau khi ", store.getState());

// // Bước 3 : Khai báo các State Khởi tạo
// let initialState = {
//   isShowInputForm: false,
//   listAccount: [],
// };

// // Bước 2 : Khai báo Reducer
// let Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.show_input:
//       // lấy lại trạng thái State : isShowInputForm
//       let isShowInputForm = state.isShowInputForm;
//       return {
//         ...state,
//         isShowInputForm: !isShowInputForm,
//       };

//     case types.add_Account:
//       let listAccount_ = state.listAccount;
//       // lấy account truyền vào
//       let account_new = action.data;
//       listAccount_.push(account_new);

//       return {
//         ...state,
//         listAccount: listAccount_,
//       };

//     default:
//       return state;
//   }
// };

// // Bước 1 : Tạo Store của Redux
// const store = createStore(Reducer);

// // Bước 4 : Khai báo ra các Action gửi lên Store Redux để xử lý ; Action của redux có 2 giá trị là type và data
// let ShowHideForm = {
//   type: types.show_input,
// };

// // Thực hiện dispatch
// console.log("State isShowInputForm ban đầu ", store.getState());
// store.dispatch(ShowHideForm);
// console.log("State isShowInputForm sau khi ", store.getState());

// Account nhận được là
// let account = {
//   id: 1,
//   name: "Huy",
// };

// // thực hiện dispatch 1 Account
// let AddAccounts = {
//   type: types.add_Account,
//   data: account,
// };
// console.log("State AddAccounts ban đầu ", store.getState());
// store.dispatch(AddAccounts);
// console.log("State AddAccounts sau khi ", store.getState());
