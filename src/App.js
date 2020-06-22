import React from 'react';
import './App.scss';
import PizzaList from './components/PizzaList';
import { Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import PizzaSearch from './components/PizzaSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza Store</h1>
      </header>
      <nav>
        <Link to="/">Pizzas</Link>
        <Link to="/cart">Cart &#128722;</Link>
      </nav>
      <PizzaSearch></PizzaSearch>
      <main>
        <Route exact path="/">
          <PizzaList></PizzaList>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </main>
    </div>
  );
}

export default App;
