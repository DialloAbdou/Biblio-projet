import React from 'react'
import Bouton from '../../components/Boutons/Bouton'
const Livre=({titre,auteur,nbPages,suppligne})=>{
    return(
        <>
        <td>{titre}</td>
        <td>{auteur}</td>
        <td>{nbPages}</td>
        <td> <Bouton couleur='btn btn-warning' clic={() => console.log('modification')}>MODIFICATION</Bouton></td>
        <td> <Bouton couleur='btn btn-danger' clic={suppligne}>SUPPRESSION</Bouton></td>

    </>

    )
}

    


export default Livre