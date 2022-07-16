import React from 'react'
import { CompanyCard, Header, HeaderComp } from '../components'
import { USstocks } from '../utils/stock'

const USstocksPage = () => {
  return (
     <>
     <div className="mx-20">
         <div className='font1'><Header/><HeaderComp/></div>

      <div className='w-3/4'>
         <div>
                    <div className="flex justify-between mb-8 mt-10">
                        <p className='text-2xl font-medium'>Top By Market Cap</p>
                        <button className=" px-3 py-0 rounded-full bg-green-100 text-green-500 text-xs">SCREENER</button>
                    </div>
                    <div className="flex gap-12">                       
      {USstocks.map((item)=>(
        <CompanyCard  item={item}  us/>
      ))}
                    </div>
        </div>

        </div>
    
    </div>
     </>
  )
}

export default USstocksPage