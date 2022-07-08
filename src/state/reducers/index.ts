import { combineReducers } from "redux";
import RepositoryReducer from "./respositoryReducer";

const reducers = combineReducers({
    repository : RepositoryReducer
})

export default reducers;

export type RootReducer = ReturnType<typeof reducers>