import React from 'react'

const FDCard = ({per,year,id}) => {
  return (
    <div className='p-2 shadow-lg rounded-lg py-4  px-4' id={id}>
        <p className='text-2xl my-4 mr-16 font-medium'>{per}%</p>
        <hr />
        <p className='text-slate-500 my-2'>{year} Year</p>
    </div>
  )
}

export default FDCard