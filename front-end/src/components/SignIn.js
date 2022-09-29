import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const SignIn = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn } = useContext(InventoryContext)

  return <>
  {signedIn ? (

    "Signed in"

) : (

    "not signed in"

)}
  </>
}
