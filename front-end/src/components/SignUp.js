import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const SignUp = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn, setDataChange, api, checkUser } = useContext(InventoryContext)
  const [userObject, setUserObject] = useState({
    first_name: false,
    last_name: false,
    username: false,
    password: false,
      })

      useEffect(() => {
        console.log("userObject ", userObject)
         }, [userObject])



         const postUser = input => {
          console.log("input", input)
        const url = `${api}/user`;
          if(input.firstName !== false && input.last_name !== false && input.username !== false && input.password !== false){
            fetch(url, {
              method: 'POST',
              body: JSON.stringify([input]),
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then(res => res.json())
              .then(data => {
                console.log("post user data, ",data);
                if(data.name !== 'error'){
                  setDataChange(curr => !curr);
                  navigate('/myitems');
                  checkUser({username:input.username,password:input.password})
                }
                else{
                  alert('There was an issue with your information, your username might be taken.')
                }



              })
          }
          else{
            alert('Invalid Input Fields')
          }
    
    
         }




  return (
    <>
      {signedIn ? (
        navigate('/')
      ) : (
        <>
        <h1 className='text-center font-bold py-10 text-5xl'>Register New User</h1>
        <div className='justify-center align-center grid'>
        <div className='rounded-3xl border-4 border-orange-600 shadow-md bg-gray-600 w-96'>

          <div>
            <h5 className='px-5 pt-3 text-3xl text-orange-400 font-bold'>
              First Name:
            </h5>
            <p className='text-md px-5 pb-3 text-teal-400'>
              <div className='mb-6 w-80'>
                <input
                  type='text'
                  className=' block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='ex. John'
                  onChange={e => {
                    let temp  = e.target.value
                    if(temp !== ""){
                      let currItem = { ...userObject };
                      setUserObject({ ...currItem, first_name: temp });
                    }
                    else{
                      let currItem = { ...userObject };
                      setUserObject({ ...currItem, first_name: false });
                    }
                  }}
                />
              </div>
            </p>
          </div>

          <div>
            <h5 className='px-5 pt-3 text-3xl text-orange-400 font-bold'>
              Last Name:
            </h5>
            <p className='text-md px-5 pb-3 text-teal-400'>
              <div className='mb-6 w-80'>
                <input
                  type='text'
                  className=' block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='ex. Doe'
                  onChange={e => {
                    let temp  = e.target.value
                    if(temp !== ""){
                      let currItem = { ...userObject };
                      setUserObject({ ...currItem, last_name: temp });
                    }
                    else{
                      let currItem = { ...userObject };
                      setUserObject({ ...currItem, last_name: false });
                    }
                  }}
                />
              </div>
            </p>
          </div>

          <div>
            <h5 className='px-5 pt-3 text-3xl text-orange-400 font-bold'>
              Username:
            </h5>
            <p className='text-md px-5 pb-3 text-teal-400'>
              <div className='mb-6 w-80'>
                <input
                  type='text'
                  className=' block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='ex. John.Doe'
                  onChange={e => {
                    let temp  = e.target.value
                    if(temp !== ""){
                      let currItem = { ...userObject };
                      setUserObject({ ...currItem, username: temp });
                    }
                    else{
                      let currItem = { ...userObject };
                      setUserObject({ ...currItem, username: false });
                    }
                  }}
                />
              </div>
            </p>
          </div>

          <div>
            <h5 className='px-5 pt-3 text-3xl text-orange-400 font-bold'>
              Password:
            </h5>
            <p className='text-md px-5 pb-3 text-teal-400'>
              <div className='mb-6 w-80'>
                <input
                  type='password'
                  className=' block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  onChange={e => {
                    let temp  = e.target.value
                    if(temp !== ""){
                      let currItem = { ...userObject };
                      setUserObject({ ...currItem, password: temp });
                    }
                    else{
                      let currItem = { ...userObject };
                      setUserObject({ ...currItem, password: false });
                    }
                  }}
                />
              </div>
            </p>
          </div>

          </div>
        </div>
        <br/>
        <div className='flex justify-center '>
<button onClick={()=>{
  postUser(userObject)

}} type="button" className="flex rounded-md bg-orange-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
          <a className="text-gray-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-4xl font-bold">Register</a>
          </button>
</div>
      </>
      )}
    </>
  )
}
