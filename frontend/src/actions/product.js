import axios from "axios"
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../constants/constant"

export const getAllProducts=()=>async(dispatch)=>{
    try {
        dispatch({
            type:GET_PRODUCTS_REQUEST
        })

        const {data}=await axios.get('/api/v1/products')

        dispatch({
            type:GET_PRODUCTS_SUCCESS,
            payload:data.products
        })
    } catch (error) {
        dispatch({
            type:GET_PRODUCTS_FAIL,
            payload:error.response.data.error
        })     
    }
}

export const getSingleProduct=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:GET_PRODUCT_REQUEST
        })

        const {data}=await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type:GET_PRODUCT_SUCCESS,
            payload:data.product
        })

    } catch (error) {
        dispatch({
            type:GET_PRODUCT_FAIL,
            payload:error.response.data.error
        })  
    }
}