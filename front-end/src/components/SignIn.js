import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const SignIn = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn, api } = useContext(InventoryContext)
  const [inputText, setInputText] = useState({})

  useEffect(()=>{
    console.log("input text object: ", inputText)
  },[inputText])

  const checkUser = (input) => {
    console.log("input", input)
    const url = `${api}/signin`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify([input]),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      });
  };

  return (
    <>
      {signedIn ? (
        navigate('/')
      ) : (
        <>
          <div className='pt-20 flex justify-center align-center grid'>
            <div className='mb-6 w-80'>
              <input
                type='text'
                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleFormControlInput2'
                placeholder='Username'
                onChange={e => {
                  let currText = { ...inputText };
                  setInputText({ ...currText, username: `${e.target.value}` });
                }}
              />
            </div>

            <div className='mb-6 w-80'>
              <input
                type='password'
                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleFormControlInput2'
                placeholder='Password'
                onChange={e => {
                  let currText = { ...inputText };
                  setInputText({ ...currText, password: `${e.target.value}` });
                }}
              />
            </div>
            <div className='flex justify-center flex-row gap-3'>

              <button
                onClick={() => {
                  navigate('/')
                }}
                type='button'
                className='px-2flex rounded-md bg-orange-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500'
                aria-expanded='false'
                aria-haspopup='true'
              >
                <a className='text-gray-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Create Account
                </a>
              </button>

              <button
                onClick={() => {
                  // console.log("input text object: ", inputText)
                  checkUser(inputText);
                }}
                type='button'
                className='flex rounded-md bg-orange-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500'
                aria-expanded='false'
                aria-haspopup='true'
              >
                <a className='text-gray-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Sign In
                </a>
              </button>

            </div>
          </div>
        </>
      )}
    </>
  )
}
