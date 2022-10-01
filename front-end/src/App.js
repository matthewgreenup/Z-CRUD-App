import './App.css'
import React, { useEffect, useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignUp } from './components/SignUp'
import { CreateItem } from './components/CreateItem'
import { Home } from './components/Home'
import { ItemCards } from './components/ItemCards'
import { ItemDetails } from './components/ItemDetails'
import { MyItems } from './components/MyItems'
import { NavBar } from './components/NavBar'
import { SignIn } from './components/SignIn'

export const InventoryContext = React.createContext()

function App () {
  const [api, setApi] = useState('http://localhost:8080')
  const [signedIn, setSignedIn] = useState(false)
  const [allItemsArray, setAllItemsArray] = useState(false)
  const [currUser, setCurrUser] = useState({})
  const [dataChange, setDataChange] = useState(false)
  const [currItem, setCurrItem] = useState({})
  

  const passContext = { signedIn, setSignedIn, api, allItemsArray, setAllItemsArray, currUser, setCurrUser,dataChange, setDataChange, currItem, setCurrItem }

  useEffect(() => {
    const url = `${api}/useritem`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setAllItemsArray(data)
      })
  }, [dataChange])

  return (
    <>
      <InventoryContext.Provider value={passContext}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/createitem' element={<CreateItem />} />
            <Route path='/myitems' element={<MyItems />} />
            <Route path='/item' element={<ItemDetails />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </Router>
      </InventoryContext.Provider>
    </>
  )
}

export default App
