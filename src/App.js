
import React, { Component}  from 'react';
import Titre from './components/titre/Titre';
class App extends Component {
  render() {
    return(
      <div className ="container">
      <Titre>Page listant les livres</Titre>
      <div>Livres</div>
      <button>Ajouter</button>
    </div>
    )
  }
}
export default App;

