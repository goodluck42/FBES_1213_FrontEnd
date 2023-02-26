import React from "react";
import "./AddingTask.css";

export default class AddingTask extends React.Component<any, any> {
    render() {
        return (
            <>
                <section className="container">
                    {/*<input className="input-text" type="text" placeholder="Description..."/>*/}

                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required/>
                        <label htmlFor="name" className="form__label">Name</label>
                    </div>
                    <input className="btn" type="button" value="Add task"/>
                </section>
            </>
        );
    }
}