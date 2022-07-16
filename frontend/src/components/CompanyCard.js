import React from 'react'
import { Link } from 'react-router-dom'

const CompanyCard = ({item,us}) => {
  const green=`text-green-600 text-sm`
  const red=`text-red-600 text-sm`

  return (
    <div className='p-2 flex flex-col shadow-md w-1/4 rounded-lg'  id={us ? item?.id : item?._id}>
    <Link to={ us ? `/us-stocks/${item?._id}` : `/stocks/${item?._id}`}> 
    <div className=' '>
        <img 
        src={item?.logo} 
        alt="logo"
        className='w-12 h-12 rounded-lg'
        />
        <p className='text-sm font-medium'>{item?.company}</p>
        <p className='my-4 '>
          {us ? '$' : '₹'}
          {us ? item?.value : item?.price}
        </p>
        <p className={item?.PL<0 ? red : green}>
        <span>{item?.PL}</span>
        <span className=''>({us ? item?.percent : item?.per}%)</span>
        </p>
    </div>

    </Link>
    </div>
  )
}

export default CompanyCard