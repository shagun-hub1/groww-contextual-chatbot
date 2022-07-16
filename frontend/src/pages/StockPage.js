import { useEffect } from "react"
import  {CompanyCard, Header, HeaderComp, IndexCard}  from "../components"
import {Index,sectors} from '../utils/stock'
import {useDispatch,useSelector} from 'react-redux'
import { getAllProducts } from "../actions/product"
import { CLEAR_ERRORS } from "../constants/constant"
import { useAlert } from "react-alert"


const StockPage = () => {
    const dispatch=useDispatch()
    const alert=useAlert()

    const {products,error}=useSelector(state=>state.products)
    useEffect(()=>{

        if(error){
            alert.error(error)
            dispatch({
                type:CLEAR_ERRORS
            })
        }

        dispatch(getAllProducts())
    },[])

    return (
        <>
        <div className="mx-20">
        <div className='font1'><Header/><HeaderComp/></div>
        <div>
            <p className='text-gray-500 font-bold text-sm mt-10 mb-4'>MARKET OPENS IN 1 DAY</p>
            <div className='w-[60vw]'>
                <div>
                    <div className="flex justify-between mb-8  w-full">
                        <p className='text-2xl font-medium'>Stocks</p>
                        <button className=" px-3 py-0 rounded-full bg-green-100 text-green-500 text-xs">SCREENER</button>
                    </div>
                    <div className="flex gap-12 w-full flex-wrap">
                        {products?.map((product)=>(
                            <CompanyCard  item={product}/>
                        ))}
                    </div>
                </div>

                 
                
                <div>
                <div className="flex justify-between mb-8 mt-8 ">
                        <p className='text-2xl font-medium'>Top Sectors</p>
                        <button className=" px-3 py-0 rounded-full  text-green-500 ">see all</button>
                    </div> 
                <div className="flex flex-wrap gap-4">
                        {sectors.map((item)=>(
                            <>
                                <div className="rounded-md shadow-md py-2 px-4">
                                    {item.sector} |  
                                    <span className="text-green-600 text-sm">
                                     { item.freq}
                                    </span>
                                </div>
                            </>
                        ))}

                </div>
                </div>

            </div>
        </div>
        </div>
        </>
      )
}

export default StockPage