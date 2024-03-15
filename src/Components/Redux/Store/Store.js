import { createStore } from "redux";
import { TaskReducer } from "../Reducers/TaskReducer";

const Store = createStore(TaskReducer);

export default Store;
