import React, { useContext } from 'react';
import Pizza from './Pizza';
import { PizzaContext } from '../contexts/PizzasContext';

// useContext => kind of like Redux connect function

const PizzaList = () => {

  let { pizzas } = useContext(PizzaContext)

  let jsxPizzas = pizzas.map((pizza) => 
    <Pizza key={pizza.key} pizza={pizza} />
  );

  return <div className="pizzas">{jsxPizzas}</div>;
};

export default PizzaList;