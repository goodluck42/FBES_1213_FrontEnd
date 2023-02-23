import React, {Component, MouseEvent} from 'react';
import {Task} from "./Application";

type TodoListProp = {
  tasks: Task[]
};

class TodoList extends Component<TodoListProp> {
    constructor(props: TodoListProp) {
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(e: MouseEvent<HTMLInputElement>): void
    {
        let id = e.currentTarget.dataset["id"];

        if (id === undefined)
        {
            return;
        }

        let realId: number = parseInt(id);

        for (let i = 0; i < this.props.tasks.length; ++i)
        {
            let task = this.props.tasks[i];

            if (task.id === realId)
            {
                fetch(`https://localhost:7233/api/v1/todo/${id}`, {
                    method: "DELETE"
                }).then(() => {
                    this.props.tasks.splice(i, 1);
                    this.forceUpdate();
                });
                break;
            }
        }


    }

    componentDidMount() {

    }

    render() {
        return (
            <ul>{this.props.tasks.map((t) => {
                return <li>
                    id= {t.id}: {t.taskDescription}
                    <input type="button" value="X" data-id={t.id} onClick={this.deleteTask}/>
                </li>
            })}</ul>
        );
    }
}

export default TodoList;