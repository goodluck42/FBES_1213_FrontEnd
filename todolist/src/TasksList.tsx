import React from "react";
import "./TasksList.css";

export default class TasksList extends React.Component<any, any> {
    render() {
        return (
            <>
                <ul className="tasks-container">
                    <li className="task">
                        <p className="desc">Value</p>
                    <input className="deleteBtn" type="button" value="X"/></li>
                    <li className="task">
                        <p className="desc">Value</p>
                        <input className="deleteBtn" type="button" value="X"/></li>
                    <li className="task">
                        <p className="desc">Value</p>
                        <input className="deleteBtn" type="button" value="X"/></li>
                </ul>
            </>
        );
    }
}