import React, { Component } from 'react';
import Bouton from '../../../components/Boutons/Bouton'

class FormulaireAjout extends Component {

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'sigmar One' }}>AFFICAHAGE DU FORMULAIRE D AJOUT </h2>


                <form>
                    <div className="form-group">
                        <label for="titre">Titre du Livre</label>
                        <input type ="text" className="form-control" id="titre"/>
                    </div>
                    <div className="form-group">
                     <label for="auteur">Auteur</label>
                     <input type="text" className="form-control" id="auteur"/>
                
                    </div>
                    <div className="form-group">
                       <label for="NbPages">Nombre de psage</label>
                       <input type="text" className="form-control" />
                    </div>
                    <Bouton typeCss="btn-primary">Valider</Bouton>
                    
                </form>
            </>

        )

    }
}
export default FormulaireAjout;