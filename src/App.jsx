import { createContext, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Products from './Components/Products'

export const globalData= createContext()

function App() {
  const [category, setCategory]= useState("")
  return (
    <globalData.Provider value={[category, setCategory]}>
    <div className="App">
     <Navbar/>
     <Products/>
    </div>
    </globalData.Provider>
  )
}

export default App
