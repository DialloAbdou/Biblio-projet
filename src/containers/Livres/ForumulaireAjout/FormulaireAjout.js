import React, { Component } from 'react';
import Bouton from '../../../components/Boutons/Bouton'

class FormulaireAjout extends Component {

    state = {
        titreSaisie: "",
        auteurSaisie: "",
        nbPagesSaisie: ""
    }

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'sigmar One' }}>AFFICAHAGE DU FORMULAIRE D AJOUT </h2>


                <form>
                    <div className="form-group">
                        <label for="titre">Titre du Livre</label>
                        <input type="text"
                            className="form-control"
                            id="titre"
                            value={this.state.titreSaisie}
                            onChange={(event) => this.setState({ titreSaisie: event.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label for="auteur">Auteur</label>
                        <input type="text"
                            className="form-control"
                            id="auteur"
                            value={this.state.auteurSaisie}
                            onChange={(event) => this.setState({ auteurSaisie: event.target.value })}

                        />

                    </div>
                    <div className="form-group">
                        <label for="NbPages">Nombre de pages</label>
                        <input type="text"
                            className="form-control"
                            id="NbPage"
                            value={this.state.nbPagesSaisie}
                            onChange={(event) => this.setState({nbPagesSaisi: event.target.value})}
                        />
                    </div>
                    <Bouton typeCss="btn-primary">Valider</Bouton>

                </form>
            </>

        )

    }
}
export default FormulaireAjout;