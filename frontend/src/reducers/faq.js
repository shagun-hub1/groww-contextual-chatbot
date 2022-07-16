import { CLEAR_ERRORS, NEW_FAQ_FAIL, NEW_FAQ_REQUEST, NEW_FAQ_SUCCESS, SUCCESS_RESET } from "../constants/constant";


export const newFaqReducer=(state={},action)=>{

    switch (action.type) {
        case NEW_FAQ_REQUEST:
            return{
                loading:true
            }

        case NEW_FAQ_SUCCESS:
            return{
            loading:false,
            faq:action.payload,
            success:true
        }

        case NEW_FAQ_FAIL:
            return{
                loading:false,
                success:false,
                error:action.payload,
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