import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PizzaProvider from './contexts/PizzaContext'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Router>
    <PizzaProvider>
      <App />
    </PizzaProvider>
  </Router>
)

