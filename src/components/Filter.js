import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search by title"
        aria-label="Search"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </form>
  );
};

export default Filter;
