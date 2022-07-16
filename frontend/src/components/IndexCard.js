import React from 'react'

const IndexCard = ({index,value,PL,percent}) => {
    const green=`text-green-600 text-sm`
    const red=`text-red-600 text-sm`

  return (
    <div className='shadow-md rounded-md p-2  w-3/4 text-slate-800 font-medium'>
        <p className='my-3  '>
        {index}
        </p>
        <p >
            <span>{value} </span>
            <span className={PL<0 ? red : green}>
            <span> {PL} ({percent}%)</span>
            </span>
        </p>
    </div>
  )
}

export default IndexCard