import{
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    UPDATE_KYC_REQUEST,
    UPDATE_KYC_FAIL,
    UPDATE_KYC_SUCCESS
} from '../constants/constant'

import axios from 'axios'

export const login=(loginData)=>async(dispatch)=>{
    try {
       
        dispatch({
            type:LOGIN_USER_REQUEST
        })
        
       

         

        const config = { headers: { "Content-Type": "application/json" } };
         
      
        const {data}=await axios.post('/api/v1/login',
             loginData
        ,config)

        dispatch({
            type:LOGIN_USER_SUCCESS,
            payload:data.user
        })
    } catch (error) {
         
        dispatch({
            type:LOGIN_USER_FAIL,
            payload:error.response.data.error
        })
    }
}

export const updateKYCStatus=(id)=>async(dispatch)=>{
    try {
        console.log(id)
        dispatch({
            type:UPDATE_KYC_REQUEST
        })

        const {data}=await axios.put(`/api/v1/user/KYC/${id}`)

        dispatch({
            type:UPDATE_KYC_SUCCESS,
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:UPDATE_KYC_FAIL,
            payload:error.response.data.error
        })
    }
}