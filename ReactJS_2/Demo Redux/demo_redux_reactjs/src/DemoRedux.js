import { createStore } from "redux";
import indexReducer from "./Reducers/IndexReducer";
import * as action from "./Action/action";

const store = createStore(indexReducer);
console.log("State isShowInputForm ban đầu ", store.getState());
store.dispatch(action.ShowHideForm);
console.log("State isShowInputForm sau khi ", store.getState());
