import React, {Component} from 'react';


type TodoListProp = {
  tasks: string[]
};

class TodoList extends Component<TodoListProp> {
    constructor(props: TodoListProp) {
        super(props);
    }
    render() {
        return (
            <ul>{this.props.tasks.map((t, n) => {
                return <li>#{n + 1}: {t}</li>
            })}</ul>
        );
    }
}

export default TodoList;