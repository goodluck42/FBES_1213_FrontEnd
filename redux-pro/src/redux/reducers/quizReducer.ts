import {ActionType, QuizAction, QuizState} from "./types";

const initialState: QuizState = {
    quizzes: []
}

export function quizReducer(state: QuizState = initialState, action: QuizAction): QuizState {
    console.log(state, action);
    switch (action.type) {
        case ActionType.SET_ALL:
            return {quizzes: action.data};
        case ActionType.GET_ALL:
            return {...state};
        case ActionType.LOAD_FAILED:
            return {quizzes: [], message: "Failed..."};
        default:
            return state;
    }
}