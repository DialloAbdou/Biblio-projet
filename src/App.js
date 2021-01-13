import React, { Children, Component } from 'react';
import Titre from './components/Titres/Titre';
import Bouton from './components/Boutons/Bouton';
import Livres from './containers/Livres/Livres';

class App extends Component {
  state={
    isAjouter:false
  }
  handleAjouter = () => {
    this.setState((oldState,props)=>{
      return {
           isAjouter: !oldState.isAjouter
        }
    })

  }
  render() {
    
    return (
    
      <div className="container">
        <Titre>Page listant les livres</Titre>
        <Livres ajoutLivre ={this.state.isAjouter} fermerAjoutLivre={()=>this.setState({isAjouter:false})}/>
        <Bouton
          couleur='btn btn-success'
          typeCss='w-100'
          clic={this.handleAjouter}>
            {!this.state.isAjouter ? "Ajouter":"Fermer L'Ajout"}
          </Bouton>
      </div>
    )
  }
}
export default App;
