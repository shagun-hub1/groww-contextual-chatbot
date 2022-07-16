import {
     NEW_FAQ_FAIL,
      NEW_FAQ_REQUEST,
      NEW_FAQ_SUCCESS
} from "../constants/constant"

import axios from "axios"

export const createFAQ=(faqData)=>async(dispatch)=>{
    try {
        
        dispatch({
            type:NEW_FAQ_REQUEST
        })

        const config = { headers: { "Content-Type": "application/json" } };

        const {data}=await axios.post('/api/v1/faq/new',faqData,config)

        dispatch({
            type:NEW_FAQ_SUCCESS,
            payload:data.faq
        })
    } catch (error) {
        dispatch({
            type:NEW_FAQ_FAIL,
            payload:error.response.data.error
        })
    }
}