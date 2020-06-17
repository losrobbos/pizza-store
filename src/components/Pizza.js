import React, { useContext } from 'react';
import { PizzaContext } from '../contexts/PizzaContext';
import { useState } from 'react';

const Pizza = (props) => {

  // we receive: props.pizza
  let { pizza } = props; //pluck out the pizza out of props
  let { addPizzaToCart } = useContext(PizzaContext)
  const [showMsg, setShowMsg] = useState(false)

  const handleAddPizzaToCart = (pizza) => {
    addPizzaToCart(pizza)
    setShowMsg(true)
    setTimeout(() => {
      setShowMsg(false)
    }, 3000)
  }

  return (
    <div className="pizza">
      <div>
        <img src={pizza.image} alt={pizza.name} />
      </div>
      <div className="pizza-details">
        <h4 className="pizza-name">{pizza.name}</h4>
        <div className="pizza-description">{pizza.description}</div>
        <div className="pizza-buy">
          <div className="price">{pizza.price} &euro;</div>
          <button onClick={() => handleAddPizzaToCart(pizza)}>BUY NOW</button>
          <div className={`msg ${showMsg ? "msg-show" : "msg-hidden"}`}>Added to cart</div>
        </div>        
      </div>
    </div>
  );
};

export default Pizza;
