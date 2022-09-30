import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const ItemDetails = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn, currItem, setCurrItem } = useContext(InventoryContext)
console.log("this is curr item", currItem, currItem[0]=== undefined )
  return (
    <>

<h1 className="text-center font-bold py-10 text-5xl">{currItem.item_name.toUpperCase()}</h1>
<div className="rounded-3xl border border-black shadow-md bg-gray-600">
<li className='flex flex-row'>
    <h5 className='px-5 pt-3 text-3xl text-orange-400'>Inventory Manager:</h5>
    <p className=' pt-3 text-3xl text-teal-400'>{`${currItem.first_name} ${currItem.last_name}`}</p>
  </li>
  <li className='flex flex-row'>
    <h5 className='px-5 pt-3 text-3xl text-orange-400'>Quantity:</h5>
    <p className=' pt-3 text-3xl text-teal-400'>{currItem.quantity}</p>
  </li>

  <li>
    <h5 className='px-5 pt-3 text-3xl text-orange-400'>Description:</h5>
    <p className='text-md px-5 pb-3 text-teal-400'>{currItem.description}</p>
  </li>
</div>

  {signedIn ? (<>
    <br/>
<div className='flex justify-center '>
<button onClick={()=>{navigate('/')}} type="button" className="flex rounded-md bg-orange-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Edit your item</a>
            </button>
</div>
</>) : (
<>
  <>Not Signed in</>
  <br/>
</>
)}
  </>

  )
}
