import React from 'react'
import { FundCard, Header, HeaderComp } from '../components'
import { funds } from '../utils/stock'

const MutualFundsPage = () => {
  return (
     <>
       <div className="mx-20">
         <div className='font1'><Header/><HeaderComp/></div>


         <div className='w-3/4'>

         <div>
                    <div className="flex justify-between mb-8 mt-10">
                        <p className='text-2xl font-medium'>Popular Funds</p>
                        <button className=" px-3 py-0 rounded-full bg-green-100 text-green-500 text-xs">SCREENER</button>
                    </div>
                    <div className="flex gap-12">
                        {funds.map((item)=>(
                            <FundCard  title={item.bank} per={item.percent} logo={item.logo} year={item.year}/>
                        ))}
                    </div>
        </div>

        

         </div>
        </div>
     </>
  )
}

export default MutualFundsPage