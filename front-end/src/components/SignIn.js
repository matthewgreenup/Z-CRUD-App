import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const SignIn = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn } = useContext(InventoryContext)
  const [inputText, setInputText] = useState({})

  return <>
  {signedIn ? (

    "Signed in"

) : (<>

<div className='pt-20 flex justify-center align-center grid'>
  <div className="mb-6 w-80">
    <input
      type="text"
      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleFormControlInput2"
      placeholder="Username"
    />
  </div>


  <div className="mb-6 w-80">
    <input
      type="password"
      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleFormControlInput2"
      placeholder="Password"
    />
  </div>
  <div className='flex justify-center flex-row gap-3'>
  <button onClick={()=>{navigate('/')}} type="button" className="px-2flex rounded-md bg-orange-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Create Account</a>
            </button>
            <button onClick={()=>{navigate('/')}} type="button" className="flex rounded-md bg-orange-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</a>
            </button>
            </div>
  </div>

</>)}
  </>
}
