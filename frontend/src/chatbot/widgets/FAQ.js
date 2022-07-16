import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
 

const FAQ = (props) => {
   
  const [Faqs, setFaqs] = useState([])

   

  const get=async function(params){

    const config={
      params:params
    }
    const {data}=await axios.get(`/api/v1/faq/getAll`,config)
    
    console.log(data)
    setFaqs(data?.FAQs)
  }
  
  const {user} =useSelector(state=>state.user)
  useEffect(()=>{
    const pathname=window.location.pathname
    

    console.log(props)
    
    const params={}
    
    const category =pathname.split('/')[1]
    
    params.category=category
    
     if(!category)
     params.category="stocks"

    if(!user)
    params.isLogin="not-login"

    if(user && !user?.KYCstatus){
      console.log(user?.KYCstatus)
      params.KYCstatus="kyc-not-updated"
    }
    get(params)
    
     
},[])

     
  return (
    <div className='flex gap-4 flex p-2  flex-wrap'>
        {Faqs?.map((faqs)=>(
          faqs?.map((faq)=>(
            <p
            className='bg-violet-300  p-2 text-xs text-slate-500  rounded-full font-medium cursor-pointer text-right'
            onClick={()=>props.actionProvider.handleFaqTap(faq)}
            >
                {faq.question}
            </p>
          ))
        ))}
    </div>
  )
}

export default FAQ