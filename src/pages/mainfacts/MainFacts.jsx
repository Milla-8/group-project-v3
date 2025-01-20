import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainFacts.scss';
import logo from './history.png';

function MainFacts() {
    return (
        <main className="main-content">
            <div className="content-container">
                <Link to="/facts">
                    <img src={logo} alt="Placeholder" className="content-image" />
                </Link>
                <div className="content-text">
                    <p>This is some text about the image. Click on the image to learn more!</p>
                </div>
            </div>
        </main>
    );
}

export default MainFacts;