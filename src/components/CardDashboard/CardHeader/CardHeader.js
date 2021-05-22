import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router';
import './CardHeader.css';

const CardHeader = () => {
    const {id} = useParams();

    return (
        <section className="dashboard-header bg-white m-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Mangoswap</h3>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-between">
                            <h4>Fund raised</h4>
                            <span>50% complete</span>
                        </div>
                        <h3>$200,000/$400,000</h3>
                    </div>
                    <div className="col-md-3 align-self-center">
                        <ProgressBar id="card-progressBar" now={50} />
                    </div>
                    <div className="col-md-3 align-self-center text-center">
                        <button className="btn btn-brand_3">Fund Startup</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardHeader;