import React, { Component } from "react";
import Pallete from "./Pallete";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColor from "./SingleColor";
import "./App.css";

export default class App extends Component {
  findPalette = id => {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  };

  render(){
    return (
      <Switch>

        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={props => (
            <SingleColor
              colorId={props.match.params.colorId}
              palette={generatePalette(
                this.findPalette(props.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <PaletteList palettes={seedColors} {...props} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={props => (
            <Pallete
              palette={generatePalette(
                this.findPalette(props.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}
