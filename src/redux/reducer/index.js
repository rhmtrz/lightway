import { combineReducers } from "redux";

import pageData from "./pageDataReducer";
import chatData from "./chatData";


export default combineReducers({
  pageData, chatData
});
