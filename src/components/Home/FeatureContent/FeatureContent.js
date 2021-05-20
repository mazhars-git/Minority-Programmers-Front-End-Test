import React from 'react';

const FeatureContent = (props) => {
    const {heading, } = props.info;
    return (
        <div className="col-md-4">
            <h3>{heading}</h3>
        </div>
    );
};

export default FeatureContent;