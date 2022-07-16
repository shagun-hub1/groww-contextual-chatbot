import { CLEAR_ERRORS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../constants/constant";

export const productsReduer=(state={products:[]},action)=>{
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return{
                loading:true
            }
        
        case GET_PRODUCTS_SUCCESS:
            return{
                loading:false,
                products:action.payload,
                success:true
            }
        
        case GET_PRODUCTS_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        default:
            return state
    }
}


export const productReduer=(state={product:{}},action)=>{
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return{
                loading:true
            }
        
        case GET_PRODUCT_SUCCESS:
            return{
                loading:false,
                product:action.payload,
                success:true
            }
        
        case GET_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        default:
            return state
    }
}