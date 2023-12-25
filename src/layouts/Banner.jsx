

import React from 'react';
import PropTypes from 'prop-types';
import '../style/layouts/banner.scss';

function Banner({ title, showText }) {
    return (
        <section className='Banner'>
        <img className='Banner_img' src={title} alt='Paysage' />
        {showText && <p className='Banner_txt'>Chez vous, partout et ailleurs</p>}
    </section>
    );
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    showText: PropTypes.bool,
};

export default Banner;

