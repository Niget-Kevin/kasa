import React from 'react';
import Data from '../data/logements.json';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';  // Importez le composant Collapse
import '../style/pages/logement.scss';

const Logement = () => {
    const { id } = useParams();
    const logementData = Data.find(logement => logement.id === id);

    if (!logementData) {
        // Gérez le cas où le logement n'est pas trouvé
        return <div>Logement non trouvé</div>;
    }

    return (
        <div className='logement'>
            <img src={logementData.cover} alt={logementData.title} />
            <div className='head'>
                <h1>{logementData.title}</h1>
                {/* Afficher le nom et la photo de l'hôte */}
                <div className="host">
                    <p className='host__name'>{logementData.host.name}</p>
                    <img className='host__img' src={logementData.host.picture} alt={logementData.host.name} />
                </div>
            </div>
            {/* Afficher l'emplacement */}
            <p>{logementData.location}</p>

            {/* Afficher les tags avec une mise en forme spécifique */}
            <div className='tag'>
                {logementData.tags.map(tag => (
                    <span className='tag__span' key={tag}>{tag}</span>
                ))}
            </div>
            <div className='collapse2' >
                {/* Utiliser le composant Collapse pour Description et Équipements */}
                <div className='collapse3'>
                    <Collapse title="Description" content={logementData.description} />
                </div>
                <div className='collapse3'>
                    <Collapse title="Équipements" content={logementData.equipments} />
                </div>
            </div>            
            
        </div>
    );
};

export default Logement;
