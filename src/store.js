import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import userReducer from "redux/reducers/userReducers";
// import productReducer from "redux/reducers/UserReducer";

const reducer = combineReducers({
  users: userReducer,
});

const middlware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlware)));

export default store;
