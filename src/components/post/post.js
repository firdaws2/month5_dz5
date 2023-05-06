import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/reducers/postReducer";
import {fetchComment} from "../../redux/reducers/commentReducer";
import Comment from "../comment/comment";

const Post = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const onSubmit = () => dispatch(fetchPosts())

    const posts = useSelector(state => state.posts.posts)
    const {comments} = useSelector(state => state.comments)

    const getComments = (id) => {
        setShow(!show)
        dispatch(fetchComment(id))
    }


    return (
        <div>
            <button  variant='outlined' onClick={onSubmit}>post</button>
            {
                posts &&
                <>
                    <h5>Posts</h5>
                    <ul style={{display: 'flex', flexDirection: 'column', rowGap: '5px', listStyle: 'none'}}>
                        {
                            posts?.map(item => <li key={item?.id}>
                                <button onClick={() => getComments(item?.id)} variant='text'>{item?.title}</button>
                                {show && comments.length > 0 && (
                                    <Comment comments={comments}/>
                                )}
                            </li>)
                        }
                    </ul>
                </>
            }
        </div>
    );
};

export default Post;