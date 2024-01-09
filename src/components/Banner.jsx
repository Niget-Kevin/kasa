
import React from 'react';
import PropTypes from 'prop-types';
import '../style/components/banner.scss';

function Banner({ banner, text }) {
    return (
        <div className='Banner'>
        <img className='Banner_img' src={banner} alt='Paysage' />
        {text && <h2 className='Banner_txt'>{text}</h2>}
    </div>
    );
}

Banner.propTypes = {
    banner: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Banner;