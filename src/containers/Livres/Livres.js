import React, { Component } from 'react';
import Bouton from '../../components/Boutons/Bouton'
import Livre from '../Livres/Livre'


class Livres extends Component {
    state = {
        livres: [
            { id: 1, titre: "L'algorithmique", auteur: "Mathieu Gaston", nbPages: 200 },
            { id: 2, titre: "La france du 19ème", auteur: "Albert Patrick", nbPages: 500 },
            { id: 3, titre: "Le monde des animaux", auteur: "Marc Merlin", nbPages: 250 },
            { id: 4, titre: "Le Virus", auteur: "Tya Milo", nbPages: 120 }
        ]
    }
    render() {
      const {livres}= this.state
        return (
            <div className="container">
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                            <th colspan="3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livres.map(livre => {
                            return (
                                <tr key={livre.id}>
                                  <Livre
                                   titre={livre.titre}
                                   auteur={livre.auteur}
                                   nbPages={livre.nbPages}
                                  />   
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}
export default Livres