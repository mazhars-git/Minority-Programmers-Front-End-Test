import React from 'react';
import './HeaderContent.css';

const HeaderContent = () => {
    return (
        <section className="header-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 pt-5 mt-5">
                        <h1 className="text-white py-3">Invest directly into <br /> minority innovations.</h1>
                        <button className="btn btn-brand_3">View Startups</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default HeaderContent;