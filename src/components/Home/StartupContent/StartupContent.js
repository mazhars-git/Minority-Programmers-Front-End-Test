import React from 'react';
import './StartupContent.css';

const StartupContent = ({info}) => {
    return (
        <div className="col-md-4 pb-3">
            <div className="startup-img-box">
                <img className="img-fluid" src={info.img} alt="" />
                <div className="startup-button">
                    <button>{info.button}</button>
                </div>
            </div>
        </div>
    );
};

export default StartupContent;