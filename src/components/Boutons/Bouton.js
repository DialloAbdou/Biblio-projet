import React from 'react'

const Bouton=({children,couleur,clickAjout})=>{
    return (
        <button className={couleur} onClick={clickAjout}>{children}</button>
      )

}


export default Bouton