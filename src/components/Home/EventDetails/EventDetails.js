import React from 'react';
import './EventDetails.css';

const EventDetails = ({info}) => {
    return (
        <div className="card-content">
            <div className="card-top">
                <img src={info.img} alt="" />
                <h3>{info.heading}</h3>
            </div>
            <button className="btn btn-primary">Learn More</button>
        </div>
    );
};

export default EventDetails;