
import React from 'react';

class FormComponent extends React.Component {

    // OTHER Option => userNameInput = React.createRef(); and add ------ ref={this.userNameInput} in input field
    state = { userName: '' }

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://api.github.com/users/${this.state.userName}`, {
            method: 'GET', // string or object
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resp = await response.json(); //extract JSON from the http response
        this.props.onSubmit(resp);
        this.setState({
            userName: ''
        });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="GitHub Username"
                    value={this.state.userName}
                    onChange={event => this.setState({
                        userName: event.target.value
                    })}
                />
                <button>Add Card</button>
            </form>
        );
    }
}

export default FormComponent;