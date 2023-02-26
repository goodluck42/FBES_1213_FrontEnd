import React, {MouseEvent, ChangeEvent, PropsWithChildren} from 'react';
import './Application.css';
import TodoList from "./TodoList";
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import AddingTask from "./AddingTask";
import TasksList from "./TasksList";

type ApplicationProp = {
    baseInputPlaceholder: string
} & PropsWithChildren;

export type Task = {
    taskDescription: string,
    id: number
};

type ApplicationState = {
    newTaskName: string,
    tasks: Task[],
    tasksCounter: number
};

class Application extends React.Component<ApplicationProp, ApplicationState> {
    constructor(props: ApplicationProp) {
        super(props);
        this.state = {
            newTaskName: "",
            tasks: [],
            tasksCounter: 0
        };

        this.addTask = this.addTask.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);
    }

    addTask(e: MouseEvent<HTMLInputElement>): void {
        fetch("https://localhost:7233/api/v1/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                taskDescription: this.state.newTaskName
            })
        }).then(text => text.json()).then(task => {
            this.state.tasks.push(task);
            this.forceUpdate();
        });
    }

    onInputChanged(e: ChangeEvent<HTMLInputElement>): void {
        this.setState({newTaskName: e.target.value});
    }

    componentDidMount() {
        fetch("https://localhost:7233/api/v1/todo/all").then(text => text.json()).then(data => {
           this.setState({tasks: data});
        });
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/task/all" element={<TasksList/>}/>
                        <Route path="/task/add" element={<AddingTask />}/>
                        <Route path="/task/update" element={<></>}/>
                        <Route path="*" element={<div>404 not found.</div>}/>
                    </Routes>
                </BrowserRouter>

                <header>

                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    This is my footer.
                </footer>
                {/*<input type="text" placeholder={this.props.baseInputPlaceholder} onChange={this.onInputChanged}/>*/}
                {/*<input type="button" value="Add task" onClick={this.addTask}/>*/}
                {/*<TodoList tasks={this.state.tasks} />*/}
                {/*{this.props.children}*/}
            </>
        );
    }
}

export default Application;