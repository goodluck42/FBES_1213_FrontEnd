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
        this.state.tasks.push({
            taskDescription: this.state.newTaskName,
            id: this.state.tasksCounter
        });

        this.setState({tasksCounter: this.state.tasksCounter + 1});
        this.forceUpdate();
    }

    onInputChanged(e: ChangeEvent<HTMLInputElement>): void {
        this.setState({newTaskName: e.target.value});
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