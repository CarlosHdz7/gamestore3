import React from 'react';
import './Comments.scss';

const Comments = ({ comments }: {comments: any}) => {
  if (comments.length) {
    return (
      <>
        {comments.map((comment: any) => (
          <div className="comment" key={comment.id}>
            <p>
              <span className="comment__user">
                <i className="bi bi-person-circle" />
                {' '}
                {comment.user.username}
                :
              </span>
              {comment.body}
            </p>
          </div>
        ))}
      </>
    );
  }
  return <p className="no-comments">No comments yet</p>;
};

export default Comments;
