import React from 'react'
const Bouton=({children,couleur,clic,typeCss})=>{
  const btnCss =`${couleur} ${typeCss}`
    return (
        <button className={btnCss} onClick={clic} >{children}</button>
      )

}
export default Bouton