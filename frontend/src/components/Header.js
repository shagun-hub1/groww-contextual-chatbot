import { useEffect, useState } from 'react'
import logo from '../utils/logo.png'
import {Link} from 'react-router-dom'
import {AiOutlineSearch,AiOutlineBell} from 'react-icons/ai'
import {BsWallet2,BsCart2} from 'react-icons/bs'
import {Avatar, Button} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import  LoginDialog  from './LoginDialog'
import { deepPurple } from '@mui/material/colors';
import { useAlert } from 'react-alert'
import { updateKYCStatus } from '../actions/user'
import { CLEAR_ERRORS, SUCCESS_RESET } from '../constants/constant'
import KYCDialog from './KYCDialog'
 

const Header = () => {
    
    const alert=useAlert()

     
     const dispatch=useDispatch()

    const {isAuthenticated,user}=useSelector(state=>state.user)
   
    const {error,success}=useSelector(state=>state.updateUser)
     
    console.log(user?.name[0])

    useEffect(()=>{
        if(error){
            alert.error(error)
            dispatch({
                type:CLEAR_ERRORS
            })
        }

        if(success){
            
            dispatch({
                type:SUCCESS_RESET
            })
             
         
        }
    },[error,dispatch,success])
      
    
  return (
      <>
      <div> 
    <div className='my-4  '>
        <div className='flex gap-12 items-center'>
            <div className='flex gap-3 '>
                <img 
                src={logo}
                alt="logo"
                className='h-10 w-10'
                />
                <p className='text-3xl tracking-widest font-bold'>Groww</p>
            </div>
            <div className='flex gap-3 text-lg  '>
                 <Link to='/stocks/user/explore'>
                 Explore
                 </Link>
               
            </div>
            <div className='flex items-center'>
                <input 
                type="text"
                className='px-4 py-[2px]  border-[1px] border-black outline-none w-80 rounded-md shadow-md '
                placeholder='What are you looking for today?'
                />
                <AiOutlineSearch className='translate-x-[-1.5rem]'/>
            </div>
            <div className='flex gap-10 text-2xl items-center'>
                <AiOutlineBell className='cursor-pointer'/>
                <BsWallet2 className='cursor-pointer'/>
                <BsCart2 className='cursor-pointer'/>

                {isAuthenticated ? 
              <>
                <Avatar className='cursor-pointer' sx={{ bgcolor: deepPurple[500] }}>
                    {user?.name[0]}
                </Avatar>
                 <KYCDialog/>
              </>
                :
                <button >
                    <LoginDialog />
                </button>
            }
            </div>
        </div>
    </div> 
    
    </div>
    
    </>

  )
}

export default Header