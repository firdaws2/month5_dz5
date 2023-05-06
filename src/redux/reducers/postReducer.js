import {types} from "../types";
import axios from "axios";

const initialState = {
    posts: []
}

export const postReducer = (state = initialState, action) => {
    if (action.type === types.ADD_USERS) {
        return {posts: action.payload}
    }
    return state
}

const addPosts = (payload) => ({type: types.ADD_USERS, payload})


export const fetchPosts = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => dispatch(
                addPosts(response.data)
            ))
    }
}

