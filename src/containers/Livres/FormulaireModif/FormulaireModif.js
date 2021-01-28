import React, { Component } from 'react';
import Bouton from '../../../components/Boutons/Bouton'

class FormulaireModif extends Component {

  state = {
    titreSaisie:' ',
    autuerSaisie:' ',
    nbPageSaisie:''

  }
  componentDidMount =()=>{
    this.setState({
      titreSaisie :this.props.titre,
      autuerSaisie: this.props.auteur,
      nbPageSaisie : this.props.nbPages
    })
  }
 handlevalidation =()=>{
    this.props.validationModification(this.props.id,this.state.titreSaisie,this.state.autuerSaisie,this.state.nbPageSaisie);
    
    
    
 }
  render() {
    return (
      <>
        <td><input type ="text" className="form-control" value={this.state.titreSaisie} onChange={(event)=>this.setState({titreSaisie:event.target.value})}/></td> 
        <td><input type ="text" className="form-control" value={this.state.autuerSaisie} onChange={(event)=>this.setState({autuerSaisie:event.target.value})}/></td> 
        <td><input type ="text" className="form-control" value={this.state.nbPageSaisie} onChange={(event)=>this.setState({nbPageSaisie:event.target.value})}/></td> 
        <td> <Bouton couleur='btn-primary' clic={this.handlevalidation}>MODIFICATION</Bouton></td>
  
      </>
    )

  }
}
export default FormulaireModif