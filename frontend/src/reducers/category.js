import { CLEAR_ERRORS,
    GET_CATEGORIES_FAIL, 
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    NEW_CATEGORY_FAIL, 
    NEW_CATEGORY_REQUEST, 
    NEW_CATEGORY_SUCCESS, 
    SUCCESS_RESET
} from "../constants/constant"


export const newCategoryReducer=(state={category:{}},action)=>{

   switch (action.type) {
       case NEW_CATEGORY_REQUEST:
           return{
               loading:true,
           }
           
       case NEW_CATEGORY_SUCCESS:
           return{
               loading:false,
               category:action.payload,
               success:true
           }
       
       case NEW_CATEGORY_FAIL:
           return{
               ...state,
               loading:false,
               error:action.payload
           }
       
       case SUCCESS_RESET:
           return{
               ...state,
               success:false
           }
       
       case CLEAR_ERRORS:
           return{
               ...state,
               error:null
           }
       default:
           return state;
   }
}

export const categoriesReducer=(state={categories:[]},action)=>{
   switch (action.type) {
        
       case GET_CATEGORIES_REQUEST:
           return{
               loading:true
           }

       case GET_CATEGORIES_SUCCESS:
           return{
               ...state,
               loading:false,
               categories:action.payload
           }


       case GET_CATEGORIES_FAIL:
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