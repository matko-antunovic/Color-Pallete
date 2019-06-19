import React, { Component } from 'react'
import ColorBox from "./ColorBox";

import "./Pallete.css"
import NavBar from "./NavBar";




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
            <ColorBox background={c[format]} name={c.name}/>)
            );
        return (
            <div className="Pallete">
                <NavBar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
               <div className="Pallete-colors">
                {colorBoxes}
               </div>
            </div>
        )
    }
}

export default Pallete;
