import React, { Component } from 'react';
import Bouton from '../../components/Boutons/Bouton'
import Livre from '../Livres/Livre'
import FormulaireAjout from './ForumulaireAjout/FormulaireAjout'
import FormulaireModif from './FormulaireModif/FormulaireModif'


class Livres extends Component {
    state = {
        livres: [
            { id: 1, titre: "L'algorithmique", auteur: "Mathieu Gaston", nbPages: 200 },
            { id: 2, titre: "La france du 19ème", auteur: "Albert Patrick", nbPages: 500 },
            { id: 3, titre: "Le monde des animaux", auteur: "Marc Merlin", nbPages: 250 },
            { id: 4, titre: "Le Virus", auteur: "Tya Milo", nbPages: 120 }
        ],
        lastIndex: 4,
        indexModif:0

    }

    
    /**
     * 
     * @param {Suppression d'un Livre} id 
     */
    handleDelete = (id)=>{
      const indexElement = this.state.livres.findIndex(elmt=>{
           return elmt.id === id;              
      })
      const newTabLivres = [...this.state.livres];
      newTabLivres.splice(indexElement,1);
      this.setState({livres:newTabLivres});  
    }
    /**
     * Ajout d'un livre
     * @param {*} titre 
     * @param {*} auteur 
     * @param {*} nbPages 
     */
    handleAjouLivre = (titre, auteur, nbPages) => { 
        const livre = {
            id: this.state.lastIndex + 1,
            titre: titre,
            auteur: auteur,
            nbPages: nbPages
        }
       const newTabLivres =[...this.state.livres];
       newTabLivres.splice()
       newTabLivres.push(livre);
       this.setState(oldTab=>{
           return {
            livres: newTabLivres,
               lastIndex: oldTab.lastIndex+1
           }
  
       })
       this.props.fermerAjoutLivre();
    }
    handleModification =(id,titre, auteur,nbPages)=>{
        const livreIndxe = this.state.livres.findIndex(l=>{
            return l.id === id;
        });
        const newLivre ={
             id: id,
             titre: titre,
             auteur: auteur,
             nbPages: nbPages
        }
        const newLivres = [...this.state.livres];
        newLivres[livreIndxe] = newLivre;
        this.setState({
            livres:newLivres,
            indexModif:0
        })

    }

    render() {
    //   const {livres}= this.state
        return (
            <div className="container table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.livres.map(livre=> {
                            if(livre.id!=this.state.indexModif)
                            {
                                return (
                                    <tr key={livre.id}>
                                      <Livre
                                       titre={livre.titre}
                                       auteur={livre.auteur}
                                       nbPages={livre.nbPages}
                                       suppligne = {()=>this.handleDelete(livre.id)}
                                       modification = {()=>this.setState({indexModif:livre.id})}
                                      />   
                                    </tr>
                                );

                            }else{
                               return (
                                   <tr key={livre.id}>
                                       <FormulaireModif
                                           id={livre.id}
                                           titre={livre.titre}
                                           auteur={livre.auteur}
                                           nbPages={livre.nbPages}
                                           validationModification={this.handleModification} />;
                                   </tr>

                               ) 
                              
                                 
                            
                   
                            }
                        })}

                    </tbody>
                </table>
                {this.props.ajoutLivre && <FormulaireAjout validation ={this.handleAjouLivre}/>}
            </div>
        )
    }
}
export default Livres