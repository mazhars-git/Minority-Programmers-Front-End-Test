import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';

const FeatureContent = (props) => {
    const {img, heading, details, percentage, fundTitle, amount, id} = props.info;
    return (
        <div className="card-content">
            <div className="card-top d-flex">
                <img style={{width: '18%'}} src={img} alt="" />
                <h3 style={{marginLeft: '10px'}}>{heading}</h3>
            </div>
            <p style={{fontSize: '12px', marginTop: '10px'}}>{details}</p>
            <div className="card-status d-flex justify-content-between">
                <h5 style={{fontWeight: '500'}}>{fundTitle}</h5>
                <span style={{fontWeight: '500'}}>{percentage}% complete</span>
            </div>
            <h5 style={{fontWeight: '700', fontSize: '22px'}}>{amount}</h5>
            
            <ProgressBar id="card-progressBar" now={percentage} />
          
            <div className="card-button d-flex justify-content-between pt-4">
                <Link to={`/cardDashboard/${id}`}>
                    <button className="btn btn-brand">Fund Startup</button>
                </Link>
                <button className="btn btn-custom">Learn More</button>
            </div>
        </div>
    );
};

export default FeatureContent;