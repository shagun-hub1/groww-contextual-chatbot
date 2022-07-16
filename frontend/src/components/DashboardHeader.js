import React from 'react'
import { Link } from 'react-router-dom'

const DashboardHeader = () => {
  return (
    <div>
         <div className='h-[60px] bg-[#1c815f] flex justify-between py-4 px-6' >
            <div className='text-2xl font-medium text-[#ddeccf]'>ADMIN DASHBOARD</div>
            <div className='flex gap-6 text-sm text-[#ffccb3] '>
              <Link to='/admin/dashboard/faq '>
              <p className='hover:font-bold ease-in duration-200 hover:underline'>ADD QUESTION</p>
              </Link>
              <Link to='/admin/dashboard/category'>
              <p className='hover:font-bold ease-in duration-200 hover:underline'>ADD CATEGORY</p>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader