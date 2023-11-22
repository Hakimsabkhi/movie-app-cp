import React from 'react';
import Filter from './Filter'; // Import the Filter component

const Navigation = ({ onFilterChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <spam>MovieApp</spam>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {/* Additional navbar items can be added here */}
        </ul>
        <Filter onFilterChange={onFilterChange} />
      </div>
    </nav>
  );
};

export default Navigation;
