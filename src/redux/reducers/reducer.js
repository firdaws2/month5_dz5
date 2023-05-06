import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {postReducer} from "./postReducer";
import {commentReducer} from "./commentReducer";


const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))