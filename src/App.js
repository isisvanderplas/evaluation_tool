import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import StudentsContainer from './students/StudentsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentsContainer students = { [] } />
      </div>
    );
  }
}

export default App;
