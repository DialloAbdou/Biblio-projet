import React, { Component } from 'react';
import Bouton from '../../components/Boutons/Bouton'
class Livres extends Component {
    render() {
        return (
            <div className="container">
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>titre1</td>
                            <td>auteur1</td>
                            <td>X pages</td>
                            <td> <Bouton couleur ='btn btn-warning'>MODIFICATION</Bouton></td>
                            <td> <Bouton couleur ='btn btn-danger'>SUPPRESSION</Bouton></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Livres