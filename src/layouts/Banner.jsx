

import React from 'react';
import PropTypes from 'prop-types';
import '../style/layouts/banner.scss';

function Banner({ title, text }) {
    return (
        <section className='Banner'>
        <img className='Banner_img' src={title} alt='Paysage' />
        {text && <p className='Banner_txt'>{text}</p>}
    </section>
    );
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Banner;

