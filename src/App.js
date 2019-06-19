import React, { Component } from 'react';
import Pallete from "./Pallete";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Pallete palette={ generatePalette(seedColors[4])}/>
  
    </div>
    )
  }
}
