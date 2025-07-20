import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router'
import Home from './routes/Home'
import Membership from './routes/Membership'
import Shop from './routes/Shop'
import Contact from './routes/Contact'
import Lookbook from './routes/Lookbook'
import Partners from './components/Partners'
import Cart from './routes/Cart'
import Admin from "./routes/Admin"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/membership' element = {<Membership />} />
        <Route path='/shop' element = {<Shop />} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/lookbook' element = {<Lookbook/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/admin' element = {<Admin/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
