import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Link to="/admin">Admin</Link>
    );
  }
}

export default App;
