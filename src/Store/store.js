import { combineReducers,createStore} from "redux"
import { counterReducer } from "./counter.reducer"
import { todoReducer } from "./todolist.reducer"
export const store=createStore(
    combineReducers({counterReducer,todoReducer})
);
