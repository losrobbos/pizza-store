import React, {useContext} from 'react';
import Pizza from './Pizza';
import { PizzaContext } from '../contexts/PizzaContext'

const PizzaList = (props) => {

  // grab me the data from the context
  // and out of that the data that I am interested
  const { pizzas } = useContext( PizzaContext )

  let jsxPizzas = pizzas.map((pizza) => <Pizza key={pizza.key} pizza={pizza} />);

  return <div className="pizzas">{jsxPizzas}</div>;
};

export default PizzaList;