import React from 'react';

const FeatureContent = (props) => {
    const {heading, details } = props.info;
    return (
        <div>
            <h3>{heading}</h3>
            <p>{details}</p>
            <button className="btn btn-primary">Learn More</button>
        </div>
    );
};

export default FeatureContent;