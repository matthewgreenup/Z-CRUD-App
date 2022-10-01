import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'
import { ItemCards } from './ItemCards'

export const MyItems = () => {
  const navigate = useNavigate()
  const { signedIn, api, dataChange, currUser } = useContext(InventoryContext)
  const [myItemsArray, setMyItemsArray] = useState([])

  useEffect(() => {
    if(currUser !== undefined){
      const url = `${api}/useritem/${currUser.user_id}`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setMyItemsArray(data)
        })
    }
  }, [dataChange, currUser])

  useEffect(() => {
 console.log("this is my items array, ", myItemsArray)
  }, [myItemsArray])

  useEffect(() => {
    console.log("this is curr user, ", currUser)
     }, [currUser])


  return <>

  {signedIn && currUser !== undefined ? (<>
  <h1 className="text-center font-bold py-10 text-5xl">{currUser.first_name}'s Items</h1>
<ul className='grid grid-cols-4 justify-items-center gap-3 p-5'>
{myItemsArray.length > 0 && Array.isArray(myItemsArray) ? myItemsArray.map(item => {
return <ItemCards item={item}/>
}): <>You have no items, yet.</>}

</ul>

</>) : (
  <div className="">
    <h1 className="text-center py-10 font-bold text-3xl">You need to be signed in to see this page</h1>
</div>
)}
  </>
}
