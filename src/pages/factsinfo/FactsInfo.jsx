import React from 'react'
import { Link } from "react-router-dom";
import './FactsInfo.scss';

function FactsInfo() {
    return (
        <div className="facts-info-section">
          <div className="text-container">
            <h1>Facts</h1>
            <p>Learn interesting facts about jelly beans, some more controversial than others, and be the life of the
              party! Sharing your bean knowledge at the next family gathering will surely make 
              you more well liked and fun, or simply just read them to satisfy your own curiosity and keep it to yourself. 
              There are alot of them, a whole 99 in fact (but they're quite quick and to the point)! Click the image to explore them.      
            </p>
          </div>
          <div className="image-container">
            <Link to="/Facts">
              <img src="/src/assets/facts2.png" alt="click for facts"/>
            </Link>
          </div>
        </div>
      );
    };

export default FactsInfo;