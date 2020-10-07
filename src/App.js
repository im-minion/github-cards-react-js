import React from 'react';
import './App.css';
import CardList from './CardList';
import FormComponent from './FormComponent';

class App extends React.Component {

  // Option: 1
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,

  //   };
  // }

  // Option: 2

  state = {
    profiles: []
  }

  addNewProfile = (profileData) => {
    // OPTION 1 : (not working.. :())
    // this.setState(prevState => ({
    //   profiles: [...prevState, profileData]
    // }));

    // OPTION 2

    this.setState({
      profiles: [...this.state.profiles, profileData]
    });
  };

  render() {
    return (
      <div className="header">
        <h3>{this.props.title}</h3>
        <FormComponent onSubmit={this.addNewProfile} />
        <CardList data={this.state.profiles} />
      </div>
    );
  }
}

export default App;
