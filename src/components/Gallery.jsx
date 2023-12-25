import React from 'react';
import Card from './Card';
import data from '../data/logements.json';
import '../style/components/gallery.scss';

function Gallery() {    
    return (
    <section className='home__gallery'>
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

export default Gallery