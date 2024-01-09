import React from 'react';
import Data from '../data/logements.json';
import { useParams } from 'react-router-dom';
import Collection from '../components/Gallery';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Error from './Error';
import '../style/pages/logement.scss';

const Logement = () => {
    const { id } = useParams();
    const logementData = Data.find(logement => logement.id === id);

    if (!logementData) {       
        return (<Error />);
    }

    return (
        <div className='logement'>
            <div className='logement__slide'>
                <Collection images={logementData.pictures} />
            </div>

            <div className='logement_content'>
                <div className='property'>
                    <h1 className='property__title'>{logementData.title}</h1>                    
                    <p className='property__subtitle'>{logementData.location}</p>
                    <div className='property__tag'>
                        {logementData.tags.map(tag => (<span className='property__tag__span' key={tag}>{tag}</span>))}
                    </div>                
                </div>

                <div className="host">
                    <div className="host__content one">
                        <div>
                            <p className='host__content__name'>{logementData.host.name.split(' ')[0]}</p>
                            <p className='host__content__name'>{logementData.host.name.split(' ')[1]}</p>
                        </div>
                        <img className='host__content__img' src={logementData.host.picture} alt={logementData.host.name} />
                    </div>
                    <Rating className='two' value={parseInt(logementData.rating)} maxStars={5} />
                </div>
            </div>

            <div className='logement__collapse' >                
                <div className='logement__collapse__title'>
                    <Collapse title="Description" content={logementData.description} />
                </div>
                <div className='logement__collapse__title'>
                    <Collapse title="Équipements" content={logementData.equipments} />
                </div>
                
            </div>
            
        </div>
    );
};

export default Logement;
