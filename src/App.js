import React from 'react';
import './App.scss';
import PizzaList from './components/PizzaList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza Store</h1>
        {/* &#128722; cart icon */}
      </header>
      <main>
        <PizzaList></PizzaList>
      </main>
    </div>
  );
}

export default App;
