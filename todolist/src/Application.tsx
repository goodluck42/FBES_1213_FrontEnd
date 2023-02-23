import React, {MouseEvent, ChangeEvent} from 'react';
import './Application.css';
import TodoList from "./TodoList";

type ApplicationProp = {
    baseInputPlaceholder: string
};

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
                <input type="text" placeholder={this.props.baseInputPlaceholder} onChange={this.onInputChanged}/>
                <input type="button" value="Add task" onClick={this.addTask}/>
                <TodoList tasks={this.state.tasks}/>
            </>
        );
    }
}

export default Application;