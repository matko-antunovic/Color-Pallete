import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./NavBar.css";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";

class NavBar extends Component {

    state={
        format:"hex"
    }

  handleChange=(e)=>{
      this.setState({
          format:e.target.value
      })
      this.props.handleChange(e.target.value)
  }

  render() {
    const { level, changeLevel } = this.props;
    return (
      <nav className="NavBar">
        <div className="logo">
          <Link to="/">ReactColorPicker</Link>
        </div>
        {this.props.isSingleColor ? null : <div className="slider-container">
            <span>Level: {level} </span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>}
        
        <div className="select-container">
        <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255, 1.0) </MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0) </MenuItem>
        </Select>
        </div>
      </nav>
    );
  }
}
export default NavBar;
