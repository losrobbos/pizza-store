import React from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../contexts/PizzaContext';

const Cart = () => {
  const { cart } = useContext(PizzaContext);

  let jsxCart = cart.map((pizza) => (
    <div className="cart-item">
      <div className="image"><img src={pizza.image} alt={pizza.name} /></div>
      <div className="name">{pizza.name}</div>
      <div className="price" >{pizza.price} &euro;</div>
    </div>
  ));

  return (
    <div className="cart">
      <h2>Your cart</h2>
      <div classname="cart-contents">
        {cart.length > 0 ? ( jsxCart ): 
        <p>Cart has no contents. Please buy pizza now</p>}
      </div>
      
    </div>
  );
};

export default Cart;
