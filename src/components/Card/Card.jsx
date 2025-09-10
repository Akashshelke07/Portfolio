// src/components/Card/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ 
  title, 
  children, 
  className = '', 
  showNameAndTitle = false, 
  name = '', 
  jobTitle = '' 
}) => {
  return (
    <div className={`card ${className}`}>
      {title && <h3>{title}</h3>}
      
      {/* Show name and job title if enabled */}
      {showNameAndTitle && (
        <div className="card-header">
          <div className="card-name">{name}</div>
          <div className="card-title">{jobTitle}</div>
        </div>
      )}
      
      {children}
    </div>
  );
};

export default Card;