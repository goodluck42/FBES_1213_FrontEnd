import React from 'react';
import './Application.css';

type ApplicationProp = {
    baseInputPlaceholder: string,
    secondAttr: string
};

type ApplicationState =
{
    inputValue: string
};

class Application extends React.Component<ApplicationProp, ApplicationState> {
    constructor(props: ApplicationProp) {
        super(props);

        this.state = {
          inputValue: ""
        };

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(): void
    {
        this.setState({ inputValue: "Hello React" });

        console.log("Changed");
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.inputValue} placeholder={this.props.baseInputPlaceholder}/>
                <input type="button" value="Change value" onClick={this.changeValue}/>
            </>
        );
    }
}

export default Application;