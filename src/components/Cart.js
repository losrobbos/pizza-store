import React from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../contexts/PizzaContext';

const Cart = () => {

  // read cart with all yummy pizzas I decided to eat soon 
  const { cart, cartTotal } = useContext(PizzaContext);

  let jsxCartHeader = <div className="cart-item cart-heading">
    <div className="quantity">Quantity</div>
    <div className="image">Pizza</div>
    <div className="name">Name</div>
    <div className="price" >Price</div>
    <div className="price-total">Item Total</div>
  </div>

  let jsxCartTotal = <div classname="cart-total">
    { cartTotal() } &euro;
  </div>


  // display all pizzas I have in my cart
  let jsxCart = cart.map((pizza) => (
    <div className="cart-item">
      <div className="quantity" >{pizza.quantity} x</div>
      <div className="image"><img src={pizza.image} alt={pizza.name} /></div>
      <div className="name">{pizza.name}</div>
      <div className="price" >{pizza.price} &euro;</div>
      <div className="price-total">{pizza.price * pizza.quantity} &euro;</div>
    </div>
  ));

  return (
    <div className="cart">
      <h2>Your cart</h2>
      <div classname="cart-contents">{
        cart.length > 0 ? 
        <>
          {jsxCartHeader}
          {jsxCart}
          {jsxCartTotal}
        </> 
        : 
        <p>Cart has no contents. Please buy pizza now</p>
      }
      </div>
      
    </div>
  );
};

export default Cart;
