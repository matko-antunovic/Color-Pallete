import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {Link} from "react-router-dom"
import chroma from "chroma-js"





class ColorBox extends Component {
  state = {
    copied: false
  };
  changeCopyState = () => {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  };

  render() {
  const { name, background ,paletteId, id ,showLink} = this.props;
   const isDarkColor=chroma(background).luminance() <= 0.08;
   const isLightColor=chroma(background).luminance() >= 0.08;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${this.state.copied && "show"}`}
          />

          <div className={`copy-msg ${this.state.copied && "show"}`}>
            <h1>copied!</h1>
            <p className={` ${isLightColor && "dark-text"} `}>{this.props.background}</p>
          </div>

          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"} `}>Copy</button>
          </div>
          {showLink ? <Link to={`/palette/${paletteId}/${id}`} onClick={e=> e.stopPropagation()}>
          <span className={`see-more ${isLightColor && "dark-text"}`}>MORE</span>
          </Link> : null}
          
        </div>
      </CopyToClipboard>
    );
  }
}
export default (ColorBox);
