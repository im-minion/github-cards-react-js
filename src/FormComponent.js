
import React from 'react';

class FormComponent extends React.Component {

    // OTHER Option => userNameInput = React.createRef(); and add ------ ref={this.userNameInput} in input field
    state = { userName: '' }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.userName);
        // const resp = await fetch.get(`https://api.github.com/users/${this.state.userName}`);
        // console.log(resp);
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