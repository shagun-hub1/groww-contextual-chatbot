import axios from 'axios'
import { 
    CLEAR_ERRORS,
    GET_CATEGORIES_FAIL,
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    NEW_CATEGORY_FAIL, 
    NEW_CATEGORY_REQUEST,
    NEW_CATEGORY_SUCCESS
} from "../constants/constant"

export const createNewCategory=(categoryData)=>async(dispatch)=>{
     
      
        try {
            dispatch({
                type:NEW_CATEGORY_REQUEST
            })
            
            const config = { headers: { "Content-Type": "application/json" } };

            const {data}=await axios.post('/api/v1/category/new',categoryData,config)

            dispatch({
                type:NEW_CATEGORY_SUCCESS,
                payload:data.category
            })
            
        } catch (error) {
            dispatch({
                type:NEW_CATEGORY_FAIL,
                payload:error.response.data.error
            })
        }
}

export const clearErrors=()=>async(dispatch)=>{

    dispatch({
        type:CLEAR_ERRORS
    })

}

export const getAllCategories=()=>async(dispatch)=>{
    try {
        dispatch({
            type:GET_CATEGORIES_REQUEST
        })

        const {data}=await axios.get('/api/v1/categories')

          
        dispatch({
            type:GET_CATEGORIES_SUCCESS,
            payload:data.categories
        })
    } catch (error) {
        dispatch({
            type:GET_CATEGORIES_FAIL,
            payload:error.response.data.error
        })
    }
}

 