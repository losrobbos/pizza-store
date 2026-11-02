import React, {useContext} from 'react';
import Pizza from './Pizza';
import { PizzaContext } from '../contexts/PizzaContext'

const PizzaList = (props) => {

  // grab me the data from the context
  // and out of that the data that I am interested
  let { pizzas, searchTerm, searchPizzas } = useContext( PizzaContext )

  let pizzasFiltered = pizzas
  if(searchTerm) {
    pizzasFiltered = searchPizzas(searchTerm)
    console.log("Found: ", pizzasFiltered.length);
  }

  let jsxPizzas = pizzasFiltered.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />);

  return <div className="pizzas">{
    pizzasFiltered.length > 0 ?
    jsxPizzas :
    <div>No items found matching term {searchTerm}</div>
  }</div>;
};

export default PizzaList;