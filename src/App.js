import React from 'react';
import './App.css';
import CardList from './CardList';
import FormComponent from './FormComponent';


const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

class App extends React.Component {

  // Option: 1

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,

  //   };
  // }
4

// Option: 2

  state = {
    profiles: testData
  }

  render() {
    return (
      <div className="header">
        <h3>{this.props.title}</h3>
        <FormComponent />
        <CardList data={this.state.profiles} />
      </div>
    );
  }
}

export default App;
