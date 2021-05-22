import React from 'react';
import logo from '../../../images/logo.png';

const MainMenu = () => {
    return (
        <section>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#"><img style={{width: '50px'}}src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Learn</a>
                    </li>
                    
                    <li className="nav-item">
                      <a className="nav-link" href="#">Course</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </section>
    );
};

export default MainMenu;