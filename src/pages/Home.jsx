import React from 'react';

import Banner from '../components/Banner';
import Collection from '../components/Collection';
import bannerImage from '../assets/images/IMG.png'


function Home() {
	return (
		<div className='home'>
			<Banner banner={bannerImage} text='Chez vous, partout et ailleurs' />
			<Collection />
		</div>
	)
}

export default Home