import React, { Component } from 'react';
import Pallete from "./Pallete";
import seedColors from "./seedColors";
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Pallete {...seedColors[4]}/>
  
    </div>
    )
  }
}
