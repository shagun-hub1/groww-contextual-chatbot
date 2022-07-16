import React from 'react'

const FundCard = ({logo,title,per,year,id}) => {
  return (
    <div className='p-2 flex flex-col shadow-md w-3/4 rounded-lg' id={id}>
       <img 
        src={logo} 
        alt="logo"
        className='w-8 h-8 rounded-lg'
        />
        <p className='text-sm mb-7 mt-4 font-medium'>{title}</p>

        <p>
          {per}% <span className='text-slate-500'>({year}Y)</span>  
        </p>
    </div>
  )
}

export default FundCard