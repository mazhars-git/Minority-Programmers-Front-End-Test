import React from 'react';
import './CardSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const CardSidebar = () => {
    return (
        <section className="card-sidebar p-3">
            <h3>Founded 17th May, 2015</h3>
            <p>Website</p>
            <ul className="sidebar-link">
                <li><a href="">mangoswap.com</a></li>
                <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
            </ul>
            <p>Location</p>
            <h3>San Francisco, California</h3>
            <p>Team Size</p>
            <h3>100-500 people</h3>
            <h3>Meet The Team</h3>
            
        </section>
    );
};

export default CardSidebar;