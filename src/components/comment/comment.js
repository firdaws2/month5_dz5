import React from 'react';

const Comment = ({ comments }) => {
    return (
        <div>
             {comments?.map((c) => <div key={c?.name}>
                  <p>{c?.body}</p>
             </div>)}
        </div>
    );
};

export default Comment;