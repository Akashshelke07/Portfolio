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
        <header className="card-header">
          <h2 className="card-name">{name}</h2>
          <p className="card-title">{jobTitle}</p>
        </header>
      )}
      
      {children}
    </div>
  );
};

export default Card;