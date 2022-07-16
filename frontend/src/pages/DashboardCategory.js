import React, { useEffect, useState } from 'react'
import { DashboardHeader } from '../components'
import {useAlert} from 'react-alert'
import { useDispatch, useSelector} from 'react-redux'
import { createNewCategory } from '../actions/category'
import { CLEAR_ERRORS, SUCCESS_RESET } from '../constants/constant'

const DashboardCategory = () => {
  const alert=useAlert()
  const dispatch=useDispatch()

  const [category, setcategory] = useState({
    name:''
  })

  const {name}=category

  const Submit=(e)=>{
    e.preventDefault();

    dispatch(createNewCategory(category))
  }

  const {success,error}=useSelector(state=>state.category)

  useEffect(()=>{

    if(error){
      alert.error(error)
      dispatch({
        type:CLEAR_ERRORS
      })
    }

    if(success){
      alert.success('Category added successfully')
      dispatch({
        type:SUCCESS_RESET
      })
    }
  },)
  const onChange=(e)=>{
    setcategory({...category,[e.target.name]:e.target.value})
  }
  return (
    <div>
        <DashboardHeader/>
        <div className='flex justify-center items-center'>
 
        <div className=' bg-red-300 p-10 my-10 mx-10 rounded-md shadow-lg  w-3/4'>
            <p
            className='text-2xl text-blue-500 font-medium m-auto w-3/4 flex justify-center items-center underline'
            >Add New Category</p>
          <form  onSubmit={Submit} className='flex justify-center items-center p-6 flex-col gap-4  '>
            <input 
            name='name'
            type="text"
            placeholder='Enter category'
            value={name}
            onChange={onChange}
            required
            autoFocus
            className='px-4 py-4 w-3/4 font-medium rounded-md italic placeholder:text-slate-300   outline-none border-2'
            />
            
            <button
                type='submit'
                className='bg-violet-400 rounded-md shadow-md text-[#f6f6f6] py-2 px-6 italic font-medium '
            >Submit</button>

          </form>
        </div>
    </div>
    </div>
  )
}

export default DashboardCategory