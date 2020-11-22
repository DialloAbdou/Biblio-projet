
import React from 'react';
import classes from './policeTitre/Titre.module.css'
 const Titre = ({children}) =>{
     const monCSS = `${classes.monTitre} border border-dark text-center p-2 m-2 bg-primary rounded text-white`
    return (
    <h1 className={monCSS}>{children}</h1>
    
    )
}
export default Titre
