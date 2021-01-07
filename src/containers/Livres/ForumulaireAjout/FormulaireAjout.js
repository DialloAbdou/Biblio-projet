import React, { Component } from 'react';
import Bouton from '../../../components/Boutons/Bouton'

class FormulaireAjout extends Component {

    state = {
        titreSaisie: "",
        auteurSaisie: "",
        nbPagesSaisie: ""
    }
    handleValidationForms =(event)=>{
        this.props.validation(this.state.titreSaisie, this.state.auteurSaisie)
        event.preventDefault();
    }

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'sigmar One' }}>AFFICAHAGE DU FORMULAIRE D AJOUT </h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="titre">Titre du Livre</label>
                        <input type="text"
                            className="form-control"
                            id="titre"
                            value={this.state.titreSaisie}
                            onChange={(event) => this.setState({ titreSaisie: event.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur</label>
                        <input type="text"
                            className="form-control"
                            id="auteur"
                            value={this.state.auteurSaisie}
                            onChange={(event) => this.setState({ auteurSaisie: event.target.value })}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nbPages">Nombre de Pages</label>
                        <input type="number"
                            className="form-control"
                            id="nbPages"
                            value={this.state.nbPagesSaisie}
                            onChange={(event) => this.setState({ nbPagesSaisie: event.target.value })}

                        />
                    </div>
                    <Bouton typeCss="btn-primary" clic ={this.handleValidationForms} >Valider</Bouton>

                </form>
            </>

        )

    }
}
export default FormulaireAjout;