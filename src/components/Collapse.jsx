import React, { useState } from 'react';
import arrow from '../assets/images/arrow_back_ios-24px 2.svg';
import '../style/components/collapse.scss'

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${isOpen ? '_content_visible' : ''}`}>
            <h3 className="collapse_title" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img
                    className={`arrow ${isOpen ? 'arrow_up' : 'arrow_down'}`}
                    src={arrow}
                    alt="show content"
                />
            </h3>
            {isOpen && (
                <div className="collapse_content">
                    {Array.isArray(content) ? content.map((item, index) => <p key={index}>{item}</p>) : content}
                </div>
            )}
        </div>
    );
};

export default Collapse;
