import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const ItemCards = props => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn } = useContext(InventoryContext)
  const [currItem, setCurrItem] = useState(props.item)

  return (
  <div className="block p-6 max-w-sm rounded-lg border border-orange-700 shadow-md hover:bg-teal-400 bg-gray-300">
     {/* <div className="block p-6 max-w-sm bg-white rounded-lg border border-orange-200 shadow-md hover:bg-gray-400 dark:bg-gray-300 dark:border-orange-700 dark:hover:bg-teal-400"> */}
  <h1 class="text-center mb-2 text-2xl font-bold tracking-tight text-black">{currItem.item_name}</h1>
    <p class="font-normal text-gray-700">{currItem.description.substring(0,100)}{currItem.description.length > 100 ? "..." : ""}{currItem.description.length}</p>
  <br/>
  </div>
  )
}
