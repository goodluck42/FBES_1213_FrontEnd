import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionType, QuizAction, QuizState} from "./redux/reducers/types";
import {RootState} from "./redux/store";
import {useEffect} from "react";
import {getQuizzes} from "./redux/actions/quizActions";
import {Dispatch} from "redux";

export default function QuizList() {
    const selector: TypedUseSelectorHook<QuizState> = useSelector;
    const dispatch = useDispatch();

    const {quizzes, message} = selector(state => state);

    useEffect(() => {
        getQuizzes()(dispatch);
    }, []);

    return (
        <ol>
            {quizzes.map(q =>
                <li>
                    <div>{q.question}</div>
                    <ul>{q.answers.map(a => <li>
                        {a}
                    </li>)}</ul>
                </li>)}
        </ol>
    )

}