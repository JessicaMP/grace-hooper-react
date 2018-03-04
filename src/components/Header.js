import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    const info = ['Not logged in', 'Talk', 'Contributions', 'Create account', 'Log in'];
    const tab1= ['Article', 'Talk'];
    const tab2 = ['Read', 'Edit', 'View history'];

    return (
      <header>
        <nav>
          <ul>
          <i className="fas fa-user"></i>
          {info.map(function(infoItem ,i){
                  return <li key={i}><a href="#li">{infoItem}</a></li>
                })}
          </ul>
        </nav>
        <div className="boxHeader">
          <div className="uls">
            <ul>
            {tab1.map(function(tab1Item ,i){
                    return <li key={i}><a href="#li">{tab1Item}</a></li>
                  })}
            </ul>
            <ul className="ulright">
            {tab2.map(function(tab2Item ,i){
                    return <li key={i}><a href="#li">{tab2Item}</a></li>
                  })}
            </ul>
            </div>
            <div className="right">
          <input placeholder="Search Wikipedia"/>
          <button><i className="fas fa-search"></i></button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
