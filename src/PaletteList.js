import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "navy",
    height:"100vh",
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"center"
  },
  container: {
    width:"50%",
    display:"flex",
    alignItems:"flex-start",
    flexDirection:"column",
    flexWrap:"wrap",
  },
  nav:{
    display:"flex",
    width:"100%",
    justifyContent:"space-between",
    color:"#fff"
  },
  palettes:{
    boxSizing:"border-box",
    width:"100%",
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gridGap:"5%"
  }
};

class PaletteList extends Component {

    onClick=(id)=>{
        this.props.history.push(`/palette/${id}`)
    }

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette {...palette} handleClick={()=>this.onClick(palette.id)} key={palette.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
