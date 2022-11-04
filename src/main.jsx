import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from '../components/footer';

import App from './App'
import Contact from "./Contact"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode >
)
