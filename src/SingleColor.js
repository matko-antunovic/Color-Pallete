import React, { Component } from 'react'
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter"
import {Link} from "react-router-dom"

class SingleColor extends Component {

    state={
        format: "hex"
    }

    onShades=(palette,colorId)=>{
        let shades=[];
        let allColors=palette.colors;

        for(let key in allColors){
            shades= shades.concat(
                allColors[key].filter(color=> color.id === colorId)
            );
        }

        return shades.slice(1);
    }

    changeFormat=(val)=>{
        this.setState({
            format:val
        })
    }

    render() {
        const {format}=this.state;
        const shadesDisplay=this.onShades(this.props.palette, this.props.colorId);
        const colorBoxes=shadesDisplay.map(color=>(
            <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
        ))
        return (
            <div className="SingleColor Pallete">
                <NavBar handleChange={this.changeFormat} isSingleColor />
                <h1>Single color shades</h1>
                <div className="Pallete-colors"> 
                    {colorBoxes}
                    <div className="Back ColorBox">
                        <Link className="back-button" to={`/palette/${this.props.palette.id}`}>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter palette={this.props.palette} />
            </div>
        )
    }
}

export default SingleColor;
