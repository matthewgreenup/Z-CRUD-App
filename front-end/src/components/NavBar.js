import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'
// import InventorySystem from '../../public/InventorySystem'

export const NavBar = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn } = useContext(InventoryContext)

  return (
    <nav className="bg-teal-600">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">

      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img onClick={()=>{navigate('/')}}className="block h-10 w-auto lg:hidden" src="/InventorySystem.png" alt="Inventory System"/>
          <img onClick={()=>{navigate('/')}}className="hidden h-10 w-auto lg:block" src="/InventorySystem.png" alt="Inventory System"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">

          <button onClick={()=>{navigate('/')}} type="button" className="flex rounded-md bg-teal-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            </button>

            <button onClick={()=>{navigate('/myitems')}} type="button" className="flex rounded-md bg-teal-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Items</a>
            </button>

            <button onClick={()=>{navigate('/createitem')}} type="button" className="flex rounded-md bg-teal-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Items</a>
            </button>

          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="relative ml-3">
          <div>

            {signedIn ? (
            <button onClick={()=>{navigate('/'); window.location.reload()}} type="button" className="flex rounded-md bg-teal-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500" aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log Off</a>
            </button>
            ):(
            <button onClick={()=>{navigate('/signin')}} type="button" className="flex rounded-md bg-teal-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500" aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</a>
            </button>
            )}

          </div>
        </div>
      </div>
    </div>
  </div>


</nav>

  )
}
