import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../assets/BeanLogo2.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>This site was made by: <br /> Camilla Evebark <br /> Robin Nilsson <br /> Alexander Moe Ditlevsen</p>
                </div>
                <div className="navbar-logo">
                        <Link to="/">
                          <img src={logo} alt="MyApp Logo" className="navbar-logo-img" />
                        </Link>
                      </div>
                <div className="footer-right">
                    <p>Some links to our Githubs:</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;