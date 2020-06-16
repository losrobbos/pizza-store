import React from 'react';

const Pizza = (props) => {
  // we receive: props.pizza

  let { pizza } = props; //pluck out the pizza out of props

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
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
