import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const CreateItem = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn } = useContext(InventoryContext)

  return <>
  {signedIn ? (

    "Signed in"

) : (
    <div className="">
    <h1 className="text-center font-bold py-10 text-3xl">You need to be signed in to see this page</h1>
</div>
)}
  </>
}
