import { combineReducers } from "redux"; // tổng hợp các reducer
import accountReducer from "./AccountReducer";
import formReducer from "./FormReducer";

const RootReducer = combineReducers({
  listAccount: accountReducer,
  isShowInputForm: formReducer,
});

export default RootReducer;
