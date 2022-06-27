import react from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Hero_Section/Home'
import Product from './Components/Product_Section/Product'

const App = () => {

  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Product />
    </div>
  )
}

export default App
