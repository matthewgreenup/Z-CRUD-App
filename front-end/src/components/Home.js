import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'
import { ItemCards } from './ItemCards'

export const Home = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn, allItemsArray, setAllItemsArray,currUser } = useContext(InventoryContext)

  return <>

  {signedIn && currUser !== undefined ? (
<>
<h1 className="text-left py-3 px-3 text-lg">Welcome, {currUser.first_name}</h1>
</>
) : (
<>
<h1 className="text-left py-3 px-3 text-lg">Sign in to Manage Your Items</h1>
</>
)}
  <h1 className="text-center font-bold py-10 text-5xl">All Items</h1>
<ul className='grid grid-cols-4 justify-items-center gap-3 p-5'>
{allItemsArray.length > 0 ? allItemsArray.map(item => {
return <ItemCards item={item}/>
}): <>There are no items</>}
</ul>

  </>
}
