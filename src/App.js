
import React, { Component}  from 'react';
import Titre from './components/Titres/Titre';
import Bouton from './components/Boutons/Bouton';

class App extends Component {
 handleAjouter = ()=>{
    console.log("Ajouter un ELement")
  }
  render() {
  
    return(
      <div className ="container">
      <Titre>Page listant les livres</Titre>
      <div>Livres</div>
      <Bouton couleur ='btn btn-success' clickAjout={this.handleAjouter}>AJOUTER</Bouton>
      <Bouton couleur ='btn btn-warning'>MODIFICATION</Bouton>
      <Bouton couleur ='btn btn-danger'>SUPPRESSION</Bouton>

    </div>
    )
  }
}
export default App;
