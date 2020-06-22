import React from 'react';
import { round } from '../helpers';

const CartItem = ({ item, updateQuantity, deleteItem }) => {
  
  // console.log(`Rendered item: ${item.id}`)

  return (
    // display all pizzas I have in my cart
      <div className="cart-item">
        <div className="quantity" >        
          <input type="number" min="1"
            value={item.quantity} 
            onChange={(e) => updateQuantity(item.id, e.target.value )} 
            style={{ width: `6ch`}}
          />
        </div>
        <div className="image"><img src={item.image} alt={item.name} /></div>
        <div className="name">{item.name}</div>
        <div className="price" >{item.price} &euro;</div>
        <div className="price-total">{round(item.price * item.quantity)} &euro;</div>
        <div className="delete" onClick={() => deleteItem(item.id)}>&#128465;</div>
      </div>
  );
}
 
export default CartItem;