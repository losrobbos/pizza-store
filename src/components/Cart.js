import React from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../contexts/PizzaContext';
import CartItem from './CartItem';

const Cart = () => {

  // read cart with all yummy pizzas I decided to eat soon 
  const { cart, cartTotal, updateQuantity, deleteItem } = useContext(PizzaContext);

  let jsxCartItems = cart.map((pizza) => (
    <CartItem key={pizza.id} item={pizza} 
      updateQuantity={updateQuantity}
      deleteItem={deleteItem}
    ></CartItem>
  ));


  let jsxCartHeader = <div className="cart-item cart-heading">
    <div className="quantity">Quantity</div>
    <div className="image">Pizza</div>
    <div className="name">Name</div>
    <div className="price" >Price</div>
    <div className="price-total">Item Total</div>
    <div className="delete"></div>
  </div>

  let jsxCartTotal = <div className="cart-total">
    <div> </div>
    <div>{ cartTotal() } &euro;</div>
    <div> </div>
  </div>

  return (
    <div className="cart">
      <h2>Your cart</h2>
      <div className="cart-contents">{
        cart.length > 0 ? 
        <>
          {jsxCartHeader}
          {jsxCartItems}
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
