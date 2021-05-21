import React from 'react';
import './EventDetails.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const EventDetails = ({info}) => {
    return (
        <div className="card-content">
            <div className="card-top d-flex">
                <img style={{width: '18%'}} src={info.img} alt="" />
                <h3 style={{marginLeft: '10px'}}>{info.heading}</h3>
            </div>
            <p style={{fontSize: '12px', marginTop: '10px'}}>{info.details}</p>
            <ProgressBar variant="warning" now={info.percentage} />
            <div className="card-button d-flex justify-content-between pt-2">
                <button className="btn btn-primary">Fund Startup</button>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default EventDetails;