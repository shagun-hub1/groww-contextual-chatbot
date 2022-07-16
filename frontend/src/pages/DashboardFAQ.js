import React, { useEffect, useState } from 'react'
import { DashboardHeader } from '../components'
import { useDispatch,useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { getAllCategories } from '../actions/category'
import { createFAQ } from '../actions/faq'
import { CLEAR_ERRORS, SUCCESS_RESET } from '../constants/constant'

const DashboardFAQ = () => {
  const dispatch=useDispatch()
  const alert=useAlert()

  const [faqData, setfaqData] = useState({
    question:'',
    answer:'',
    category:'stocks'
  })

  const {question,answer,category} =faqData

  const Submit=(e)=>{
    e.preventDefault();

    dispatch(createFAQ(faqData))
  }

  const onChange=(e)=>{
    setfaqData({...faqData,[e.target.name]:e.target.value})
  }

  const {categories}=useSelector(state=>state.categories)

  const {success,error}=useSelector(state=>state.newFaq)
  useEffect(()=>{
    dispatch(getAllCategories())

    if(error){
      alert.error(error)
      dispatch({
        type:CLEAR_ERRORS
      })
    }

    if(success){
      alert.success('FAQ Added Successfully')
      setfaqData({
        question:'',
        answer:'',
        category:''
      })
      dispatch({
        type:SUCCESS_RESET
      })
    }

  },[error,dispatch,success])
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
     name='question'
     type="text"
     placeholder='Enter question'
     value={question}
     onChange={onChange}
     required
     autoFocus
     className='px-4 py-4 w-3/4 font-medium rounded-md italic placeholder:text-slate-300   outline-none border-2'
     />
     
     <input 
     name='answer'
     type="text"
     placeholder='Enter answer'
     value={answer}
     onChange={onChange}
     required
     autoFocus
     className='px-4 py-4 w-3/4 font-medium rounded-md italic placeholder:text-slate-300   outline-none border-2'
     />

     <select
      name="category"
      value={category}
      className='w-3/4 p-2 font-medium outline-none italic rounded-md' 
      onChange={onChange}>
        {categories?.map((category)=>(
          <option>{category.name}</option>
        ))}
     </select>
     
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

export default DashboardFAQ