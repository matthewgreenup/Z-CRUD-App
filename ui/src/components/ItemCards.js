import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const ItemCards = props => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn, setCurrItem } = useContext(InventoryContext)

  return (
  <div onClick={()=>{setCurrItem(props.item);navigate('/item')}}className="w-full h-full rounded-lg border-4 border-orange-600 shadow-md hover:bg-teal-400 bg-gray-300">
    <h1 className="px-3 text-left text-top text-xs font-bold text-black">qty. {props.item.quantity}</h1>
    <h1 className="text-center mb-2 text-2xl font-bold tracking-tight text-black">{props.item.item_name}</h1>
    <p className="font-normal text-gray-700 pb-2 px-2">{
    props.item.description.substring(0,100)}
    {props.item.description.length > 100 ? "..." : ""}
    </p>
  </div>
  )
}
