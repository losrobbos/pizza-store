import './App.scss';
import PizzaList from './components/PizzaList';
import { Route, Link, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<PizzaList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
