import React from 'react'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './features/home/components/Home'
import Builder from './features/builders/components/Builder.jsx'
import Categories from './features/categories/components/Categories.jsx'
import Deals from './features/deals/components/Deals.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
   
    <>
    <Router>
    <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/builders' element={<Builder/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/deals' element={<Deals/>} />
      </Routes>
      <Footer/>
    </Router>

    </>
  )
}

export default App