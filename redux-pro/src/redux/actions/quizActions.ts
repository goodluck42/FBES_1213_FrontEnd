import {Dispatch} from "redux";
import {ActionType, Quiz, QuizAction} from "../reducers/types";

export function getQuizzes() {
    return (dispatch: Dispatch<QuizAction>) => {
        fetch("https://localhost:7188/api/v1/quiz").then(data => data.json()).then(data => {
            dispatch({
                type: ActionType.SET_ALL, data
            });
        }).catch(err => {
            dispatch({
                type: ActionType.LOAD_FAILED,
                data: []
            })
        });
    };
}