import React from 'react';

import Banner from '../layouts/Banner';
import Gallery from '../components/Gallery';
import bannerImage from '../assets/images/IMG.png'


export default function Home() {
	return (
		<div className='home'>
			<Banner title={bannerImage} text='Chez vous, partout et ailleurs' />
			<Gallery />

		</div>
	)
}