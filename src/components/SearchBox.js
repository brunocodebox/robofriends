import React from 'react';

// This is a presentational component, it just returns something.
// It receives props and it returns some sort of a view.
const SearchBox = ({searchField, searchChange}) => {
  return(
    <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
