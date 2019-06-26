import React from "react"

const PaletteFooter=({palette})=>{

    return(
        <footer className="Pallete-footer">
                {palette.paletteName}
               </footer>
    )
}
export default PaletteFooter;