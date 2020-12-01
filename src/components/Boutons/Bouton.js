import React from 'react'
const Bouton=({children,couleur,clickAjout,typeCss})=>{
  const btnCss =`${couleur} ${typeCss}`
    return (
        <button className={btnCss} onClick={clickAjout} >{children}</button>
      )

}


export default Bouton