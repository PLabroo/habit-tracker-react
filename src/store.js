// centralized store for storing all data

import { legacy_createStore as createStore } from "redux";
import habitsReducer from "./reducer";

const store = createStore(habitsReducer);
export default store;
