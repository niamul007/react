import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import EmployeeCard from './EmployeeCard'
import TravelCard from './TravelCard.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TravelCard />
  </React.StrictMode>,
)
