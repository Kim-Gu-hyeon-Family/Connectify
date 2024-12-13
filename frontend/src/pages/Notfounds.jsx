import React from 'react';
import { Link } from 'react-router-dom';
import './Notfounds.css';

const Notfounds = () => {
    return (
        <div className="notfound-container">
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to="/Main">Go to Home</Link>
        </div>
    );
};

export default Notfounds;