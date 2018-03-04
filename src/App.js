import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Title from './components/Title';
import Main from './components/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Nav/>
      <Title/>
      <Main/>
      {/* <Aside/> */}
      </div>
    );
  }
}

export default App;