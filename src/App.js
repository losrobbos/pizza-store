import React from 'react';
import './App.scss';
import PizzaList from './components/PizzaList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza Store</h1>
      </header>
      <main>
        <PizzaList></PizzaList>
      </main>
    </div>
  );
}

export default App;
