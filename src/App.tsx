import react from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Hero_Section/Home'
import Product from './Components/Product_Section/Product'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="Product" element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
