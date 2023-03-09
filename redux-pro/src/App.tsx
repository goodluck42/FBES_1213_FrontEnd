import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import QuizList from "./QuizList";

function App() {
    return (
        <Provider store={store}>
            <QuizList />
        </Provider>
    );
}

export default App;
