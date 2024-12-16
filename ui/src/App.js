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
  // const [api, setApi] = useState('https://inventory-system-database.herokuapp.com')

  const [signedIn, setSignedIn] = useState(false)
  const [allItemsArray, setAllItemsArray] = useState(false)
  const [currUser, setCurrUser] = useState({})
  const [dataChange, setDataChange] = useState(false)
  const [currItem, setCurrItem] = useState({})

  const checkUser = input => {
    // ("input", input)
    const url = `${api}/signin`
    fetch(url, {
      method: 'POST',
      body: JSON.stringify([input]),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log("log in response: ",data)
        if (data === true) {
          fetch(`${api}/username/${input.username}`)
            .then(res => res.json())
            .then(userData => {
              // console.log('hopefully given user: ', userData[0])
              setCurrUser(userData[0])
              setSignedIn(data)
            })
        } else alert('Wrong Username or Password')
      })
  }

  const passContext = {
    signedIn,
    setSignedIn,
    api,
    allItemsArray,
    setAllItemsArray,
    currUser,
    setCurrUser,
    dataChange,
    setDataChange,
    currItem,
    setCurrItem,
    checkUser
  }

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
