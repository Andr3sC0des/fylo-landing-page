import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/Header"
import Main from "./components/Content"
import './style.css'
import EarlyAccess from './components/EarlyAccess'
import Footer from "./components/Footer"
import Attribution from './components/attribution'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Attribution />
    <Header />
    <Main />
    <EarlyAccess />
    <Footer />
  </React.StrictMode>
)
