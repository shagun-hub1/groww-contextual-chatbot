import React, { useEffect } from 'react'
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useAlert} from 'react-alert'
import { login } from '../actions/user';
import { CLEAR_ERRORS, SUCCESS_RESET } from '../constants/constant';
import { useNavigate} from 'react-router-dom'

const AdminLogin = () => {

    const alert=useAlert()
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [adminData, setadminData] = useState({
        name:'',
        email:'',
        password:''
    })

    const {name,email,password}=adminData

    const onChange=(e)=>{
        setadminData({...adminData,[e.target.name]:e.target.value})
    }

    const Submit=(e)=>{
        
        e.preventDefault();
        


      

        dispatch(login(adminData))
    }

    const {error,success}=useSelector(state=>state.user)
   

    useEffect(()=>{
        if(error){
            alert.error(error)
            dispatch({
                type:CLEAR_ERRORS
            })
        }
        
        
        if(success){
            console.log("hi")
            navigate('/admin/dashboard/faq')
            dispatch({
                type:SUCCESS_RESET
            })
        }

    },[error,success,dispatch])
    const inputcss=` rounded-md font-medium p-2 w-3/4 italic focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 shadow-lg`
  return (
    <div className='bg-[#faebd7] h-screen'>
        <div className='bg-[#a23333] h-[60px] flex justify-center items-center shadow-lg  '>
            <span className='text-[#f6f6f6] text-2xl'>ADMIN LOGIN</span>
        </div>
        <div className='flex justify-center items-center my-20 '>
            <form onSubmit={Submit}  className='flex flex-col justify-center items-center gap-6 bg-red-400 w-2/4 p-12 bg-red-300'>
                <input
                name='name'
                placeholder='Enter your name'
                className={inputcss}
                value={adminData.name}
                onChange={onChange}
                autoFocus
                required
                />
                <input
                name='email'
                type='email'
                placeholder='Enter your email'
                className={inputcss}
                value={adminData.email}
                onChange={onChange}
                autoFocus
                required
                />
                <input
                name='password'
                type='password'
                placeholder='Enter password'
                className={inputcss}
                value={adminData.password}
                onChange={onChange}
                autoFocus
                required
                />
                <button
                type='submit'
                className='bg-violet-400 rounded-md shadow-md text-[#f6f6f6] py-2 px-6 italic font-medium '
                >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin