import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Navneet" age="30"/>
        <Person name="Rahul" age="31">My Hobbies: Racing</Person>
        <Person name="Diyana" age="29"/>
      </div>
    );
    /* return React.createElement('div', {className: 'App'}, 
           React.createElement('h1', null, 'Test')); */
  }
}

export default App;
