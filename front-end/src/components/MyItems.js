import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const MyItems = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn, allItemsArray, setAllItemsArray } = useContext(InventoryContext)




  return <>
  {signedIn ? (

    "Signed in"

) : (
  <div className="">
    <h1 className="text-center py-10 text-3xl">You need to be signed in to see this page</h1>
</div>
)}
  </>
}
