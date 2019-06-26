import React, { Component } from 'react'
import ColorBox from "./ColorBox";

import "./Pallete.css"
import NavBar from "./NavBar";
import PaletteFooter from './PaletteFooter';




class Pallete extends Component {

   state={
        level:500,
        format:"hex"
    }

    changeLevel=(newLevel)=>{
        this.setState({level:newLevel})
    }

    changeFormat=(val)=>{
        this.setState({
            format:val
        })
    }

    render() {
        const{level,format}=this.state;
        const colorBoxes=this.props.palette.colors[level].map(c=> (
            <ColorBox background={c[format]} name={c.name} key={c.id} id={c.id} paletteId={this.props.palette.id} showLink={true} />
            ));
           
        return (
            <div className="Pallete">
                <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} isSingleColor={false} />
               <div className="Pallete-colors">
                {colorBoxes}
               </div>
               <PaletteFooter palette={this.props.palette}/>
            </div>
        )
    }
}

export default Pallete;
