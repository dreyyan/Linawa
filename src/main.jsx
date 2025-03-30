import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Home from './Home.jsx'
// Fixes the accordions not collapsing 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// ROUTING
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Home />
    </BrowserRouter>
  </StrictMode>,
)