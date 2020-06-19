import React, { useState } from 'react';
import Pizza from './Pizza';

const PizzaList = (props) => {

  const [ pizzas, setPizzas ] = useState([
    { id: 1, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!", name: 'Hawaii', price: 5.99, image: "https://media.istockphoto.com/photos/slices-of-pizza-hawaiian-toppings-with-pineapple-ham-and-cheese-picture-id1160976666?b=1&k=6&m=1160976666&s=170667a&w=0&h=5m4uLBuT7oJ3UkX4s0xybkEV7gsZWOpgjYC1WDns_7E=" },
    { id: 2, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!", name: 'Quatro formaggi', price: 4.99, image: "https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274__340.jpg" },
    { id: 3, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!", name: 'Vegetale', price: 4.99, image: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__340.jpg" },
    { id: 4, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!", name: 'Margherita', price: 3.99, image: "https://media.istockphoto.com/photos/pizza-margarita-with-cheese-top-view-isolated-on-white-background-picture-id1168754685?b=1&k=6&m=1168754685&s=170667a&w=0&h=osOa2jnhLMLuE9WwnknSIZObWf_EQb5Psun9qAuKNxY=" },
    { id: 5, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!", name: 'Salami', price: 5.99, image: "https://media.istockphoto.com/photos/pepperoni-pizza-closeup-picture-id1146536318?b=1&k=6&m=1146536318&s=170667a&w=0&h=muSVN1LHghVpaawxcmTeBjXvci-1-RL7OCMVAlJgvf8=" },
    { id: 6, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!", name: 'Teriyaki', price: 7.99, image: "https://cdn.pixabay.com/photo/2017/01/22/19/20/pizza-2000614__340.jpg" },
  ]);

  let jsxPizzas = pizzas.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />);

  return <div className="pizzas">{jsxPizzas}</div>;
};

export default PizzaList;
