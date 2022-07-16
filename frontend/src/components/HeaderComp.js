import React from 'react'
import {NavLink} from 'react-router-dom'

const HeaderComp = () => {
    const menu=[
        {text:'Stocks',link:'/stocks/user/explore' },
        {text:'Mutual Funds',link:'/mutual-funds/user/explore'},
        {text:'Fixed Deposits',link:'/deposits/user/explore'},
        {text:'US Stocks',link:'/us-stocks/user/explore'},
      ]
      
      return (
    <div className='my-4'>
         <div className='flex text-lg gap-6 '>
        {menu.map((item)=>(
            <>
            <NavLink
            to={item.link}
             
            className={({ isActive }) =>
            isActive ? 'text-green-500  underline' : 'hover:text-green-500 '
          }
            >
                {item.text}
            </NavLink>
            </>
        ))}
    </div>
    <hr />
    </div>
  )
}

export default HeaderComp