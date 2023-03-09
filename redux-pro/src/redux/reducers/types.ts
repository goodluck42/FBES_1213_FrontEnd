export type Quiz = {
    question: string;
    answers: string[]
};

export interface QuizState {
    quizzes: Quiz[];
    message?: string;
}

export interface QuizAction {
    type: ActionType;
    data: Quiz[];
}

export enum ActionType
{
    SET_ALL = "SET_ALL",
    GET_ALL = "GET_ALL",
    LOAD_FAILED = "LOAD_FAILED"
}