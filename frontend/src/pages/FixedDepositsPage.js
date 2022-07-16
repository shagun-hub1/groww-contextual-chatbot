import React from 'react'
import { FDCard, Header, HeaderComp } from '../components'
import { deposits } from '../utils/stock'

const FixedDepositsPage = () => {
  return (
    <>
        <div className="mx-20">
         <div className='font1'><Header/><HeaderComp/></div>

            <div className='w-3/4'>
                {deposits.map((item)=>(
                    <>
                    <div className='my-12'>
                        <p className='flex gap-2'>
                            <img 
                            src={item.logo}
                            alt="logo"
                            className='w-8 h-g rounded-lg'
                             />
                             <span className='font-medium text-2xl'>{item.name}</span>
                        </p>

                        <div className='flex gap-4'>
                            {item.FDs.map((i)=>(
                                <>
                                <FDCard per={i.per} year={i.year} id={i.id} />
                                </>
                            ))}
                        </div>
                    </div>
                    </>
                ))}     
            </div>

        </div>
    </>
  )
}

export default FixedDepositsPage