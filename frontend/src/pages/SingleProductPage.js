import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components'
import {Line} from 'react-chartjs-2'
import { useDispatch,useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';
import { CLEAR_ERRORS } from '../constants/constant'
import { getSingleProduct } from '../actions/product'

const SingleProductPage = () => {

  const alert=useAlert()
  const dispatch=useDispatch()

  const green=`text-green-500 text-sm`
  const red=`text-red-500 text-sm`
  const {id}=useParams()
   

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

    
    const {product,error}=useSelector(state=>state.product)

  useEffect(()=>{

    dispatch(getSingleProduct(id))
    if(error){
      alert.error(error)
      dispatch({
        type:CLEAR_ERRORS
      })
    }
  },[])
  
const data={
  labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  datasets:[{
    data:product?.data,
    fill:false,
    label:'Progress',
    backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
  }

  ]
}
 
 
  return (
    <>
         <div className="mx-20">
            <div className='font1'><Header/></div>

          <hr className='mb-8'/>
          <div>
            <div className='flex flex-col gap-6'>

              <img 
              src={product?.logo} 
              className='h-12 w-12 rounded-lg border-2 '
              alt="logo" 
              />
              <p className='text-2xl font-medium text-slate-700'>
                {product?.company}
              </p>
              <p className='flex gap-4 items-center'>
              <p className='text-3xl font-bold '>
               ₹{product?.price}
              </p>
              <span className={product?.PL<0 ? red : green}>
                {product?.PL}  ({product?.per}%)
              </span>
              </p>
          </div>
          
              </div>
              <Line data={data} />
        </div>
    </>
  )
}

export default SingleProductPage