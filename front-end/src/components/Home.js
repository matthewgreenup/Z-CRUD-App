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

<ul className='grid grid-cols-4 justify-items-center gap-3 p-5'>
{allItemsArray.length > 0 ? allItemsArray.map(item => {
return <ItemCards item={item}/>
}): <>There are no items</>}
</ul>

  </>
}


{/* <div className='flex flex-row items-center justify-center'>
<ul className='grid grid h-screen grid-cols-4 justify-items-center gap-3 p-5'>
{allItemsArray.length > 0 ? allItemsArray.map(item => {
return <ItemCards item={item}/>
}): <>There are no items</>}
</ul>
</div> */}