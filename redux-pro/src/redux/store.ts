import {createStore, combineReducers, applyMiddleware} from "redux";
import {quizReducer} from "./reducers/quizReducer";

const rootReducer = combineReducers({
    quiz: quizReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);