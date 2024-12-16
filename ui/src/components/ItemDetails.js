import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../App'

export const ItemDetails = () => {
  const navigate = useNavigate()
  const { signedIn, setSignedIn, currItem, setCurrItem, currUser,setDataChange, api } = useContext(InventoryContext)
  const [editToggle, setEditToggle] = useState(false)
  const [itemObject, setItemObject] = useState({})

      useEffect(() => {
        // console.log("item object, ", itemObject, currItem.item_id)
         }, [itemObject])

      const patchItem = input => {
        // console.log("input", input)
      const url = `${api}/item/${currItem.item_id}`;
        if(input.item_name !== "" && input.description !== "" && input.quantity != false){
          fetch(url, {
            method: 'PATCH',
            body: JSON.stringify([input]),
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
          })
            .then(res => res.json())
            .then(data => {
      // console.log('end of fetch ', data);
      setDataChange(curr => !curr);
      navigate('/myitems');
            })
        }
        else{
          alert('Invalid Input Fields')
        }
       }

       const deleteItem = itemId => {
        // console.log("item id", itemId)
        const url = `${api}/item/${itemId}`;
        fetch(url, {
          method: 'DELETE',
          body: JSON.stringify(),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        })
          .then(res => res.json())
          .then(data => {
            // console.log('end of fetch ', data);
            setDataChange(curr => !curr);
            navigate('/myitems');
                  })
       }

  return (<>

{currItem.item_name === undefined ? (
        navigate('/')
      ) : (

    <>

{editToggle ? (

<>
          <h1 className='text-center font-bold pt-10 text-5xl'>Edit Item</h1>
          <div className='py-5 flex justify-center align-center grid'>
                  <input
                    type='text'
                    className=' block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    rows='4'
                    cols='60'
                    maxLength='1023'
                    defaultValue={currItem.item_name}
                    onChange={e => {
                      let givenName = e.target.value
                        let currItem = { ...itemObject };
                        setItemObject({ ...currItem, item_name: givenName });
                    }}
                  />
                </div>
          <div className='rounded-3xl border-4 border-orange-600 shadow-md bg-gray-600 justify-center mx-20'>
            <div className='flex flex-row'>
            <h5 className='px-5 pt-3 text-3xl text-orange-400 font-bold'>Inventory Manager:</h5>
    <p className=' pt-3 text-3xl text-teal-400'>{`${currItem.first_name} ${currItem.last_name}`}</p>
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
                    defaultValue={currItem.quantity}
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
                    defaultValue={currItem.description}
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
<button onClick={()=>{

let result = window.confirm(
  'Are you sure you want to delete this item?'
);
if(result){
  deleteItem(currItem.item_id)
}
  }} type="button" className="flex rounded-md bg-red-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Delete from Inventory</a>
            </button>
</div>
        </>

):(

//Normal Page

<>
<h1 className="text-center font-bold py-10 text-5xl">{currItem.item_name.toUpperCase()}</h1>
<div className="rounded-3xl border-4 border-orange-600 shadow-md bg-gray-600 justify-center mx-20">
<div className='flex flex-row'>
    <h5 className='px-5 pt-3 text-3xl text-orange-400 font-bold'>Inventory Manager:</h5>
    <p className=' pt-3 text-3xl text-teal-400'>{`${currItem.first_name} ${currItem.last_name}`}</p>
  </div>
  <li className='flex flex-row'>
    <h5 className='px-5 pt-3 text-3xl text-orange-400 font-bold'>Quantity:</h5>
    <p className=' pt-3 text-3xl text-teal-400'>{currItem.quantity}</p>
  </li>

  <div>
    <h5 className='px-5 pt-3 text-3xl text-orange-400 font-bold'>Description:</h5>
    <p className='text-md px-5 pb-3 text-teal-400'>{currItem.description}</p>
  </div>
</div>
</>
)}


  {signedIn ? (<>
    <br/>
{currUser.user_id === currItem.user_id ? (
<div className='flex justify-center '>

{editToggle ? (
  <button onClick={()=>{
    patchItem(itemObject)
  }} type="button" className="flex rounded-md bg-teal-700 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Save Changes</a>
            </button>
):(
<button onClick={()=>{
    setEditToggle(curr => !curr);
  }} type="button" className="flex rounded-md bg-orange-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"aria-expanded="false" aria-haspopup="true">
            <a className="text-gray-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Edit your item</a>
            </button>
)}


</div>
):(<></>)}</>) : (
<>
  <></>
  <br/>
</>
)}



</>

      )}

  </>)
}
