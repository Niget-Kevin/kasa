import React from 'react';
import Card from './Card';
import data from '../data/logements.json';
import '../style/components/collection.scss';

function Collection() {    
    return (
    <section className='collection'>
        {data.map(data => {
            return (
            <Card
                key={data.id} 
                id={data.id} 
                title={data.title} 
                cover={data.cover} 
            />
            )
        })}
    </section>
    )
}

export default Collection