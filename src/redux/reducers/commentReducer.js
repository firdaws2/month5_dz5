import axios from "axios";
import {types} from "../types";

const initialState = {
    comments: []
}

export const commentReducer = (state = initialState, action) => {
    if (action.type === types.VIEV_COMMENT) {
        return {...state, comments: action.payload}
    }
    return state
}

const viewComment = (payload) => ({type: types.VIEV_COMMENT, payload: payload})


export const fetchComment = (id) => {
    return async function (dis) {
        const {data}  = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        dis(viewComment(data))
    }
}
