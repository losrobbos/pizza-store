import React from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../contexts/PizzaContext';

const PizzaSearch = () => {

  let { searchTerm, setSearchTerm } = useContext(PizzaContext)

  return ( <div className="pizza-search">
    <input type="text" placeholder="Search term..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div> );
}
 
export default PizzaSearch;