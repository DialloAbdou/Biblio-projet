import React, { Component } from 'react';
import Bouton from '../../components/Boutons/Bouton'
import Livre from '../Livres/Livre'
import FormulaireAjout from './ForumulaireAjout/FormulaireAjout'


class Livres extends Component {
    state = {
        livres: [
            { id: 1, titre: "L'algorithmique", auteur: "Mathieu Gaston", nbPages: 200 },
            { id: 2, titre: "La france du 19ème", auteur: "Albert Patrick", nbPages: 500 },
            { id: 3, titre: "Le monde des animaux", auteur: "Marc Merlin", nbPages: 250 },
            { id: 4, titre: "Le Virus", auteur: "Tya Milo", nbPages: 120 }
        ],
        lastIndex: 4
    }
    handleDelete = (id)=>{
      const indexElement = this.state.livres.findIndex(elmt=>{
           return elmt.id === id;              
      })
      const newTabLivres = [...this.state.livres];
      newTabLivres.splice(indexElement,1);
      this.setState({livres:newTabLivres});  
    }
    handleAjouLivre = (titre, auteur, nbPages) => {
        const livre = {
            id: this.state.lastIndex+1,
            titre: titre,
            auteur: auteur,
            nbPages: nbPages
        };
        // copie le tableau
        const newTab = [...this.state.livres];
        
        newTab.push(livre);
        // Modifier le state
        this.setState(oldstate=>{
            return{
                Livres: newTab,
                lastIndex : oldstate.lastIndex+1
            }
        })

    }

    render() {
      const {livres}= this.state
        return (
            <div className="container table-responsive">
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
                                   suppligne = {()=>this.handleDelete(livre.id)}
                                  />   
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                {this.props.ajoutLivre && <FormulaireAjout validation ={this.handleAjouLivre}/>}
            </div>
        )
    }
}
export default Livres