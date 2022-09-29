import './App.css'
import React, { useEffect, useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {CreateAccount} from './components/CreateAccount'
import {CreateItem} from './components/CreateItem'
import {Home} from './components/Home'
import { ItemCards } from './components/ItemCards' 
import { ItemDetails } from './components/ItemDetails' 
import { MyItems } from './components/MyItems' 
import { NavBar } from './components/NavBar' 
import { SignIn } from './components/SignIn' 

export const InventoryContext = React.createContext()

function App () {
  const [signedIn, setSignedIn] = useState(false)
  // const [currUser, setCurrUser] = useState({})

  const passContext = { signedIn, setSignedIn }

  return (
    <>
      <InventoryContext.Provider value={passContext}>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
      </InventoryContext.Provider>
    </>
  )
}

export default App
