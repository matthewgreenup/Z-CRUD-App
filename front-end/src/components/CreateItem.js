import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const CreateItem = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn, currUser, api, setDataChange } = useContext(InventoryContext)
  const [itemObject, setItemObject] = useState({
user_id: currUser.user_id,
item_name: false,
description: false,
quantity: false

  })

  useEffect(() => {
    console.log("item object, ", itemObject)
     }, [itemObject])

     const postItem = input => {
      console.log("input", input)
    const url = `${api}/item`;
      if(input.item_name !== false && input.description !== false && input.quantity != false){
        fetch(url, {
          method: 'POST',
          body: JSON.stringify([input]),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(data => {
    console.log(data);
    setDataChange(curr => !curr);
    navigate('/myitems');
          })
      }
      else{
        alert('Invalid Input Fields')
      }


     }

  return (
    <>
      {signedIn && currUser !== undefined ? (
        <>
          <h1 className='text-center font-bold pt-10 text-5xl'>Add New Item</h1>
          <div className='py-5 flex justify-center align-center grid'>
                  <input
                    type='text'
                    className=' block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    rows='4'
                    cols='60'
                    maxLength='1023'
                    placeholder='Enter Name of Item'
                    onChange={e => {
                      let givenName = e.target.value
                        let currItem = { ...itemObject };
                        setItemObject({ ...currItem, item_name: givenName });
                    }}
                  />
                </div>
          <div className='rounded-3xl border-4 border-orange-600 shadow-md bg-gray-600 justify-center mx-20'>
            <div className='flex flex-row'>
              <h5 className='px-5 pt-3 text-2xl text-orange-400 font-bold'>
              Associated Inventory Manager Username:
              </h5>
              <p className=' pt-3 text-3xl text-teal-400'>
{currUser.username}
              </p>
            </div>
            <li className='flex flex-row'>
              <h5 className='px-5 pt-3 text-3xl text-orange-400 font-bold'>
                Quantity:
              </h5>
              <p className=' pt-3 text-3xl text-teal-400'>
                <div className='mb-6 w-60'>
                  <input
                    type='text'
                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    placeholder='Enter a Number'
                    onChange={e => {
                      let givenQuantity = parseInt(e.target.value)
                      if(isNaN(givenQuantity)){
                        let currItem = { ...itemObject };
                        setItemObject({ ...currItem, quantity: false });
                      }
                      else{
                        let currItem = { ...itemObject };
                        setItemObject({ ...currItem, quantity: givenQuantity });
                      }
                    }}
                  />
                </div>
              </p>
            </li>

            <div>
              <h5 className='px-5 pt-3 text-3xl text-orange-400 font-bold'>
                Description:
              </h5>
              <p className='text-md px-5 pb-3 text-teal-400'>
                <div className='mb-6'>
                  <input
                    type='text'
                    className=' block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    rows='4'
                    cols='60'
                    maxLength='1023'
                    placeholder='Description of Item'
                    onChange={e => {
                      let givenDescription = e.target.value
                        let currItem = { ...itemObject };
                        setItemObject({ ...currItem, description: givenDescription });
                    }}
                  />
                </div>
              </p>
            </div>
          </div>
          <br/>
          <div className='flex justify-center '>
<button onClick={()=>{postItem(itemObject)}} type="button" className="flex rounded-md bg-orange-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add to Inventory</a>
            </button>
</div>
        </>
      ) : (
        <div className=''>
          <h1 className='text-center py-10 font-bold text-3xl'>
            You need to be signed in to see this page
          </h1>
        </div>
      )}
    </>
  )
}
