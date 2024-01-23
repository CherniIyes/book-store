import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='searchForm'>
      <input
        type="text"
        placeholder="Salvation..."
        className='search'
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className='searchButton' onClick={handleSearchSubmit}>
        &#x1F50E;
      </button>
    </div>
  );
};

export default Search;
