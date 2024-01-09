import React from 'react';
import starGrey from '../assets/images/star-solid-grey.svg';
import starRed from '../assets/images/star-solid-red.svg';
import '../style/components/rating.scss';

const Rating = ({ value, maxStars }) => {
    const stars = Array.from({ length: maxStars }, (_, index) => (
        <img
            key={index}
            src={index < value ? starRed : starGrey}
            alt={`Star ${index + 1}`}
            className="star-icon"
        />
    ));

    return <div className="stars">{stars}</div>;
};

export default Rating;
