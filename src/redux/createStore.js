import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducer";
import middlewares from './middlewares';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(middlewares),
);

export default function configureStore() {
  return store;
}
