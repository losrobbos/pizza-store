import { createContext, useState } from 'react';
import { round } from '../helpers';
import pizzaData from './pizzas.json';

// Context = comparable to Redux Store
export const PizzaContext = createContext()

// Provider = comparable to Redux Provider
// => this will be a component that wraps other components
//    making data available to them
//    so components can pluck out the data they need
const PizzaProvider = (props) => {

  const Provider = PizzaContext.Provider

  const [pizzas, setPizzas] = useState(pizzaData);

  // cart will hold an array of products
  const [cart, setCart] = useState([])

  // state for holding the search term
  const [searchTerm, setSearchTerm] = useState('')

  // calculate totals
  const cartTotal = () => {
    let sum = cart.reduce((sum, item) => {
      return (sum + item.quantity * item.price)
    }, 0)
    return round(sum)
  }

  const updateQuantity = (pizzaId, quantityNew) => {
    let cartUpdated = cart.map(pizza => {
      if (pizza.id == pizzaId) {
        pizza.quantity = quantityNew
      }
      return pizza
    })
    setCart(cartUpdated)
  }

  const deleteItem = (pizzaId) => {
    let cartUpdated = cart.filter(pizza => pizza.id != pizzaId)
    setCart(cartUpdated)
  }

  // add a pizza to the cart state array
  const addPizzaToCart = (pizza) => {

    let cartItems = [...cart]

    // check if item already in cart
    let cartItemFound = cartItems.find(item => item.id == pizza.id)

    // if found => increase quantity by one
    if (cartItemFound) {
      cartItemFound.quantity++
      setCart(cartItems)
    }
    // if not found - add item with quantity 1
    else {
      let cartItemNew = { ...pizza, quantity: 1 }
      cartItems.push(cartItemNew) // add pizza to cart items
      setCart(cartItems)
    }

  }

  const searchPizzas = (searchTerm) => {
    if (!searchTerm) {
      return pizzas
    }
    searchTerm = searchTerm.toLowerCase()
    return pizzas.filter(item => item.name.toLowerCase().includes(searchTerm))
  }

  const sharedData = {
    pizzas,
    cart,
    addPizzaToCart,
    updateQuantity,
    deleteItem,
    cartTotal,
    searchTerm, setSearchTerm,
    searchPizzas
  }

  // in props.children we have all components that we are wrapping
  // typically our whole app
  return <Provider value={sharedData}>{props.children}</Provider>
}

export default PizzaProvider

