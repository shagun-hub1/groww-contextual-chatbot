import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
 
 
import{
    newCategoryReducer,
    categoriesReducer
} from './reducers/category'
import { loginReducer, updateUserReducer } from './reducers/user'
import { newFaqReducer } from './reducers/faq'
import { productReduer, productsReduer } from './reducers/product'

const reducer=combineReducers({
    category:newCategoryReducer,
    categories:categoriesReducer,
    user:loginReducer,
    newFaq:newFaqReducer,
    products:productsReduer,
    product:productReduer,
    updateUser:updateUserReducer
})

 

const store=configureStore({
    reducer
})

export default store;