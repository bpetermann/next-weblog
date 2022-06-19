import React, { useState } from 'react';

const SearchContext = React.createContext({
  searchTerm: '',
  searchTermChange: () => {},
});

export const SearchContextProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTermChangeHandler = (text) => {
    setSearchTerm(text);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm: searchTerm,
        searchTermChange: searchTermChangeHandler,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
