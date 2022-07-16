import { CLEAR_ERRORS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, SUCCESS_RESET, UPDATE_KYC_FAIL, UPDATE_KYC_REQUEST, UPDATE_KYC_SUCCESS } from "../constants/constant";

export const loginReducer=(state={},action)=>{

    switch (action.type) {


        case LOGIN_USER_REQUEST:
            return{
                loading:true,
                isAuthenticated:true,
            }

       
            
        
        case LOGIN_USER_SUCCESS:
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload,
                success:true
            }
    
        
        case LOGIN_USER_FAIL:
            return{
                loading:false,
                isAuthenticated:false,
                error:action.payload
            }
        
         

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        case SUCCESS_RESET:
            return{
                ...state,
                success:false
            }
        default:
            return state
    }
}

export const updateUserReducer=(state={},action)=>{
    switch (action.type) {

        case UPDATE_KYC_REQUEST:
            return{
                loading:true
            }

        case UPDATE_KYC_SUCCESS:
         
            return{
                loading:false,
                updatedUser:action.payload,
                success:true
            }
    
        
        case UPDATE_KYC_FAIL:
            return{
                loading:false,
                error:action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        case SUCCESS_RESET:
            return{
                ...state,
                success:false
            }
    
        default:
            return state;
    }
}