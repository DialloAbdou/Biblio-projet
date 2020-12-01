
import React, { Component } from 'react';
import Titre from './components/Titres/Titre';
import Bouton from './components/Boutons/Bouton';
import Livres from './containers/Livres/Livres';

class App extends Component {
  handleAjouter = () => {
    console.log("Ajouter un ELement")
  }
  render() {
    return (
      <div className="container">
        <Titre>Page listant les livres</Titre>
        <Livres />
        <Bouton
          couleur='btn btn-success'
          typeCss='w-100'
          clickAjout={this.handleAjouter}>AJOUTER</Bouton>
      </div>
    )
  }
}
export default App;
