import React from 'react';
import { IComment } from '../../interfaces/IComment';
import './Comments.scss';

const Comments = ({ comments }: {comments: Array<IComment>}) => {
  if (comments.length) {
    return (
      <>
        {comments.map((comment: IComment) => (
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
