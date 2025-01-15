import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import './beans.scss'; // Add custom styles if needed



const BeanPage = () => {
  const [beans, setBeans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://jellybellywikiapi.onrender.com/api/Beans/?pageIndex=1&pageSize=20';

  // Fetch data from API
  useEffect(() => {
    const fetchBeans = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBeans(data.items); // Set the "items" array from the response
        setLoading(false);
      } catch (err) {
        setError('Error fetching beans');
        setLoading(false);
      }
    };

    fetchBeans();
  }, []);

  if (loading) return <p>Loading beans... 🍬</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bean-page">
      <h1 className="title">Jelly Beans Flavors</h1>
      <div className="bean-grid">
        {beans.map((bean) => (
          <div key={bean.beanId} className="bean-card" style={{ backgroundColor: bean.backgroundColor }}>
            <img src={bean.imageUrl} alt={bean.flavorName} className="bean-image" />
            <h3>{bean.flavorName}</h3>
            <p className="bean-description">{bean.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeanPage;
