import React, { useState } from 'react';
import arrow from '../assets/images/arrow_back_ios-24px 2.svg';
import '../style/components/collapse.scss';

function renderContent(content) {
    if (Array.isArray(content)) {
        return content.map((item, index) => <p key={item.id || index}>{item}</p>);
    } else {
        return <p>{content}</p>;
    }
}

function Collapse({ title, content }) {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="collapse">
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
            {title}
            <img
            className={`arrow ${toggle ? 'arrow_up' : 'arrow_down'}`}
            src={arrow}
            alt="show content"
            />
        </h3>
        <div className={`collapse_content${toggle ? '' : '_hidden'}`}>
            {renderContent(content)}
        </div>
        </div>
    );
}

export default Collapse;


