import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'
import { ItemCards } from './ItemCards'

export const Home = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn, allItemsArray, setAllItemsArray } = useContext(InventoryContext)

  return <>
  {signedIn ? (
<>
<h1 className="text-left py-3 px-3 text-lg">Welcome, NAME</h1>
</>
) : (
<>
<h1 className="text-left py-3 px-3 text-lg">Sign in to Manage Your Items</h1>
</>
)}
<ul>
{allItemsArray.length > 0 ? allItemsArray.map(item => {
return <ItemCards item={item}/>
}): <>There are no items</>}
</ul>

  </>
}
