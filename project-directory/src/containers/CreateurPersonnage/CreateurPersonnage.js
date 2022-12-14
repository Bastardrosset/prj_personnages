import React , { Component } from 'react';
import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';
import Personnage from './Personnage/Personnage';

class CreateurPersonnage extends Component {
    state = {
        personnage :{
            image: 3,
            force: 0,
            agilite: 0,
            intelligence: 0
        }
    }
    render() {
        return (
            <div className='container'>
                <TitreH1>Créateur de personnage</TitreH1>
                <Personnage {...this.state.personnage}/>
                <div>Armes</div>
                <div className='row no-gutters'>
                    <Bouton typeBtn="btn-danger" css="col-6" clic={() => console.log("réinitialisation")}>Réinitialiser</Bouton>
                    <Bouton typeBtn="btn-success" css="col-6">Créer</Bouton>
                </div>
            </div>
        );
    }
}

export default CreateurPersonnage;