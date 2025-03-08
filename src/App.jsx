import { useState } from 'react'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Sambasec from './components/Sambasec'
import Nikesec from './components/Nikesec'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar />
      <Hero />
      <Sambasec />
      <Nikesec />
      <Footer />
    </div>
  )
}

export default App
