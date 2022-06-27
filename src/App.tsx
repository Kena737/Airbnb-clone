import react from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Hero_Section/Home'
import Product from './Components/Hero_Section/Product-detailed'

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
