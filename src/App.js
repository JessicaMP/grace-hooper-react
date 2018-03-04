import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
// import Aside from './components/Aside';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Nav/>
      {/* <Main/>
      <Aside/> */}
      </div>
    );
  }
}

export default App;